import crypt from "crypt";

const secretKey =crypt.randomBytes(32).toString("hex");


export default secretKey;