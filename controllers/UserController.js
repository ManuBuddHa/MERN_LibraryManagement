const bcrypt = require('bcrypt');
const User = require('../models/UserModel');

const createUser = async (req, res) => {
    const { userId, name, email, password, phone } = req.body;
    try {
        const existingUser = await User.findOne({ phone });
        if (existingUser) {
            return res.status(400).json({ error: 'User with this phone number already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ userId, name, email, password: hashedPassword, phone });
        await newUser.save();
        res.status(201).json({ msg: "User created successfully", user: newUser });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create user' });
    }
};

const viewUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json({ msg: "User Details", data: users });
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" })
    }
}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const update = await User.findByIdAndUpdate(id, req.body, { new: true });
        if (!update) {
            return res.status(400).json({ msg: "User Not Found" });
        }
        res.status(200).json({ msg: "User Details Updated", data: update })
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" })
    }
}

const deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        const del = await User.findByIdAndDelete(id);
        if (!del) {
            return res.status(400).json({ msg: "User Not Found" });
        }
        res.status(200).json({ msg: "Deleted Successfully", data: del });
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Server Error" })
    }
}

const Login = async(req,res)=>{
    try{
        const {id,password} = req.body;
        const user = await User.findOne({id});
        if(!user){
            return res.status(400).json({msg:"User Doesn't Exist"});
        }
        const MatchPassword=await bcrypt.compare(password,user.password)
        if(!MatchPassword){
            return res.status(400).json({msg:"Invalid Credentials"});
        }
        res.status(200).json({msg:"Log In Successful"})
    }catch(error){
        console.log(error);
        res.status(500).json({msg:"Server Error"})
    }
}
module.exports = { createUser, viewUsers, updateUser, deleteUser, Login };
