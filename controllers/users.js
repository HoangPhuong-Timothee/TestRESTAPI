import {v4 as uuidv4} from "uuid";

let users=[];

export const createUser=(req, res)=>{
    const user=req.body;
    const userWithID={id: uuidv4(), ... user};
    users.push(userWithID);
    res.send(`User with name ${user.lastName} added to db`);
}

export const getUsers=(req, res)=>{
    res.send(users);
}

export const delUserByID=(req, res)=>{
    const { id }=req.params;
    users=users.filter((user)=>user.id!==id);
    res.send(`User with id ${id} deleted from db`);
}

export const getUserByID=(req, res)=>{
    const { id }=req.params;
    const foundUserByID=users.find((user)=>user.id===id);
    res.send(foundUserByID);
}

export const updateUserByID=(req, res)=>{
    const { id }=req.params;
    const { lastName, firstName, age }=req.body;
    const foundUserByID=users.find((user)=>user.id===id);
    if(lastName) foundUserByID.lastName=lastName;
    if(firstName) foundUserByID.firstnName=firstName;
    if(age) foundUserByID.age=age;
    res.send(`User with id ${id} updated`);
}