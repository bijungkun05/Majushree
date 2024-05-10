import User from "../model/user.model.js";
import bcryptjs from "bcryptjs";

export const AdminAccount = async (req, res) => {
  try {
    const { email, password } = req.body;
    const adminAcc = await User.findOne({ email });

    if (adminAcc) {
      return res.status(400).json({ msg: "Admin account already exists" });
    } else {
      const newAdmin = new User({
        email: "admin@test.com", // Default email for the admin
        password: await bcryptjs.hash("admin", 10), // Hashed default password "admin"
        role: "admin",
      });
      await newAdmin.save();
      console.log("Admin created successfully");
      return res.status(201).json({ msg: "Admin created successfully" });
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json(error);
  }
};
