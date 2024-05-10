import express from 'express';
import { getMember, createMember, getMemberById, updateMember, deleteMember } from "../controller/member.controller.js";

const router = express.Router();

// GET route to fetch all members
router.get("/getmember", getMember);

// POST route to create a new member
router.post("/createmember", createMember);

// GET route to fetch a member by ID
router.get("/getmemberby/:id", getMemberById);


router.put("/updatemember/:id", updateMember);

router.delete("/deleteMember/:id", deleteMember);

export default router;


