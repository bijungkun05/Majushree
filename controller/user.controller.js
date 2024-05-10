
import User from "../model/user.model.js";
import bcrytjs from "bcryptjs";
import { generateToken } from "../utils/authutils.js";



export const Signup =async (req,res)=>
    {
        try{
            const {email,password}=req.body;
            const user= await User.findOne({email})
            if (user)
                {
                    return res.status(400).json({msg:"user already exist"});
                }

                const hashpassword = await bcrytjs.hash(password, 10)
                const createdUser= new User({
                    email,
                    password: hashpassword,
                    role :"member"
                })
              const saveUser= await createdUser.save()
                res.status(201).json({msg:"user created sucessfully", user:saveUser})


        }
        catch(error)
        {
            console.log("error:",error);
            res.status(500).json(error);
        }
    }


    export const login = async(req,res)=>
        {
            try{
                const {email,password} =req.body;
                const user =await User.findOne({email});
                const isMatch = await bcrytjs.compare(password, user.password);
                if(!user)
                    {
                        return res.status(400).json({msg:"user not found"});
                    }
                    if (!isMatch)
                        {
                          return res.status(400).json({msg:"invalid password"});
                        }
                     const token = generateToken(user);
                    res.status(200).json({msg :"User login sucessfully" ,user:user, token:token});
                    }

                    
            
            catch(error)
            {
                console.log("error:",error);
                res.status(500).json({message:"invalid credentials"});
            }
        }
        


