const validateSchema = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body, { abortEarly: false });

        if(error) return res.status(422).json({ message: `${error.details.map(detail => detail.message)}` });
        else next();
    }
};

export default validateSchema;