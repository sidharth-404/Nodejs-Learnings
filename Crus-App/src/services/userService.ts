import { User } from "../model/userModel";

export const createUser=async (name:string, email:string)=>{
    const newUser=new User({name,email});
    return await newUser.save();
}


export const getAllUser=async()=>{

    return await User.find();
}

export const getByUserId=async(id:string)=>{

    return await User.findById(id);
}

export const updateUser=async(id:string,name:string, email:string)=>{
    return await User.findByIdAndUpdate(id,{name,email},{new:true});
}

export const deleteUser=async(id:String)=>{
  return await User.findByIdAndDelete(id);
}