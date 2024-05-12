import express from "express";
import { login } from "../controller/user.controller.js";
const router = express.Router();
import authorize from "../middleware/auth.middleware.js";


router.post("/login", login)
router.get("/me",authorize, (req, res) => {
    res.status(200).json(req.user);
});


export default router;