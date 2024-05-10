import mongoose from "mongoose";

const UserSchema= mongoose.Schema(
    {
        email:{
            type:String,
            required : true,
            unique : true
        },
        password:
        {
            type: String,
            required: true,
            unique: true
        },
        role :{ 
            type: String,
            enum :["admin", "member"],default:"member"
        },
    });

const User = mongoose.model("User", UserSchema);

export default User;

