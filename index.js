import express from 'express'
import mongoose from 'mongoose';
import cors from "cors";

import bodyParser from 'body-parser';
import signupRouter from './route/signup.router.js';
import memberRoute from './route/member.route.js';
import classesRoute from './route/classes.router.js';
import paymentRoute from './route/payment.router.js';

import loginRouter from './route/login.router.js';

import  {AdminAccount}  from './scripts/setup.js';
import  authorize  from './middleware/auth.middleware.js';





const app = express()
const port = 3001
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());


//connect to database
const URI="mongodb://localhost:27017/Majhushree"
try{
mongoose.connect(URI,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})
console.log("connected to database");
}catch(error){
console.log("error:",error)
}


//defining routes for admin account 
app.post ("/admin/",AdminAccount);


//defining route

app.use("/api/",authorize, memberRoute);

app.use("/api/",authorize,classesRoute);

app.use("/api/",authorize, paymentRoute);

app.use("/api/user/", signupRouter);
app.use ("/auth/", loginRouter);


app.listen(port, () => {
  console.log(`server is listening on port ${port}`)
})