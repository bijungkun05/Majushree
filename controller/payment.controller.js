
import payment from "../model/payment.model.js";

// get all payment

export const getPayment =async (req,res)=>
    {
        try{
            const Payment= await payment.find();
            res.status(200).json(Payment);

        }catch(error)
        {
            console.log("error:",error);
            res.status(500).json(error);
        }
    };

    //create Payment 
    export const createPayment = async (req, res) => {
        try {
            const PaymentData = new payment(req.body);
            if(!PaymentData)
                {
                    return res.status(404).json({msg: "payment data not found"});
                }
            const savedPayment = await PaymentData.save();
            res.status(200).json(savedPayment);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    };
    

        //get payment by id
        export const getPaymentById =async(req,res)=>
            {
                try{
                    const id =req.params.id;
                    const paymentExist =await payment.findById(id);
                    if(!paymentExist)
                        {
                            return res.status(404).json({msg: "payment not found"})
                        }
                        res.status(200).json(paymentExist);

                }catch(error)
                {
                    res.status(500).json( {error: error.message});
                }
            }

            //update payment
            export const updatePayment =async (req,res)=>
            {
                try{
                    const id =req.params.id;
                    const paymentExist =await payment.findById(id);
                    if(!paymentExist)
                        {
                            return res.status(401).json({msg: "payment not found"});
                        }
                        const updateData = await payment.findByIdAndUpdate(id, req.body, {new: true});
                        res.status(200).json(updateData);


                }catch(error){
                    res.status(500).json({error: error.message});
                }

            }

            //delete payment
            export const deletePayment = async (req,res)=>
                {
                    try{
                        const id =req.params.id;
                        const paymentExist =await payment.findById(id); 
                        if(!paymentExist)
                            {
                                return res.status(401).json({msg: "Payment not found"});

                            }
                            await payment.findByIdAndDelete(id);
                            res.status(200).json({msg:"Payment deleted sucessfully"});
                    }catch (error)
                    {

                    }
                }