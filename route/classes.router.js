import express from 'express';


import { createClasses, deleteClasses, getClassById, getClasses, updateClasses } from "../controller/classes.controller.js";


const router= express.Router();

router.get("/getclasses", getClasses);

// POST route to create a new class
router.post("/createclass", createClasses);

// GET route to fetch a class by ID
router.get("/getClassBy/:id", getClassById);


router.put("/updateClassBy/:id", updateClasses);

router.delete("/deleteClassBy/:id", deleteClasses);

export default router;
