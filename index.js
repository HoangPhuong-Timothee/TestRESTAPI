import express from "express";
import bodyParser from "body-parser";
import usersRoute from "./routes/users.js";

const PORT=5000;
const app=express();

app.use(bodyParser.json());

app.get('/', (req, res)=>{
    res.send("Home page")
});

app.use('/users', usersRoute);

app.listen(PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});