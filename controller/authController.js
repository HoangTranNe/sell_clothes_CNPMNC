const User =require("../model/user");
const bcrypt = require("bcrypt");


const authController={
    registerUser: async(req,res)=>
    {
        try {
            const salt=await bcrypt.genSalt(10);
            const hashed =await bcrypt.hash(req.body.password,salt);

            //tao user moi
            const newUser = await new User (
                {
                    username: req.body.username,
                    email: req.body.email,
                    password: hashed,A
                }
            );
            // luu db
            const user = await newUser.save();
            res.status(200).json(user);
            
        } catch (error) {
            
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.status(200).json(users);
        } catch (error) {
            console.error("Error getting all users:", error);
            res.status(500).json({ error: "Internal Server Error" });
        }
    }
};
module.exports=authController;