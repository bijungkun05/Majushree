import mongoose from "mongoose";



const paymentSchema =mongoose.Schema(
    {
        PaymentId: { type: Number, required: true },
        MemberId: { type: mongoose.Schema.Types.ObjectId, ref: 'Member', required: true },
        PaymentDate: { type: Date, required: true },
        Amount: { type: Number, required: true },
        PaymentMethod: { type: String, required: true },
        Status: { type: Boolean, required: true }
      }
    );      


const payment = mongoose.model("payment", paymentSchema);

export default payment;