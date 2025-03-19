import { Request,Response} from "express";
import * as userService from '../services/userService'
import logger from "../log/logger";


export const createUser=async(req:Request, res: Response)=>{

    try{
        const {name,email}=req.body;
        const newUser=await userService.createUser(name,email);
        res.status(201).json(newUser);
        logger.info(newUser);
    }
    catch(err){
        console.error(err);
        res.status(500).send('server error');
    }

}


export const getAllUser=async(req : Request , res: Response)=>{
    try{
        const users=await userService.getAllUser();
        res.json(users);
    }catch(err){
        res.status(500).send('server errror');
    }
}

export const getByUserId=async(req: Request,res: Response): Promise<any>=>{
    try{
        const user=await userService.getByUserId(req.params.id)

        if(!user){
            return res.status(400).send('User not found');
        }
        res.json(user);
    }catch(err){
        console.log(err);
        res.status(500).send('server error');
    }
}

export const updateUser=async(req: Request,res: Response): Promise<any>=>{
    try{
        const{name,email}=req.body;
        const updatedUser=await userService.updateUser(req.params.id,name,email);
        if(!updatedUser){
            return res.status(400).send('user not found');
        }

        res.json(updatedUser);
    }catch(err){
        console.log(err);
        res.status(500).send('server error');
    }
}

export const deleteUser = async (req: Request, res: Response): Promise<any>=>{
    try{
        const deletedUser=await userService.deleteUser(req.params.id);
        if(!deletedUser){
            return res.status(400).send('no user found');
        }
        res.json(deletedUser);
    }
    catch(err){
        res.status(500).send('server not found');
    }
}
