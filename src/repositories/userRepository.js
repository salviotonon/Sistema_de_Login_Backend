import User from "../models/User.js";

class userRepository {
    static async getUserByEmail(email) {
        return await User.findOne({ email: email });
    }

    static async createUser(name, email, password) {
        const user = new User({
            name, 
            email,
            password
        });

        await user.save();

        return;
    }
}

export default userRepository;