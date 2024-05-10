import express from 'express';


import { createPayment, deletePayment, getPayment, getPaymentById, updatePayment } from "../controller/payment.controller.js";



const router= express.Router();

router.get("/getpayment", getPayment);

// POST route to create a new member
router.post("/createPayment", createPayment);

// GET route to fetch a member by ID
router.get("/getPaymentby/:id", getPaymentById);


router.put("/updatePayment/:id", updatePayment);

router.delete("/deletePaymentBy/:id", deletePayment);



export default router;
