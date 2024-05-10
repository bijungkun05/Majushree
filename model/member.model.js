import mongoose from "mongoose";



const memberSchema =mongoose.Schema(
    {
    MemberId: { type: Number, required: true },
    Name: { type: String, required: true },
    Gender: { type: String, required: true },
    Address: { type: String, required: true },
    Class: { type: String, required: true },
    ContactNo: { type: Number, required: true },
    Email: { type: String, required: true },
    JoinDate: { type: Date, required: true },
    paymentStatus: { type: Boolean, required: true }
});


const member = mongoose.model("member", memberSchema);

export default member;