import jwt from "jsonwebtoken";
import getToken from '../helpers/get-token';

import dotenv from "dotenv";
dotenv.config();

const checkToken = (req, res, next) => {
    if(!req.header.authorization) {
        
        return res.status(401).json({ message: "ACCESS DENIED!"});

    }

    const token = getToken(req);

    if(!token) {

        return res.status(401).json({ message: "ACCESS DENIED!"});

    }

    try {

        const verified = jwt.verify(token, process.env.SECRET);

        req.user = verified;

        next();
        
    } catch (error) {
        
        return res.status(400).json({ message: "INVALID TOKEN!"});

    }
}