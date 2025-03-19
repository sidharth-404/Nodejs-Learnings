import mongoose from "mongoose";

const connectDB=async(uri: string)=>{
    try{
        await mongoose.connect(uri,{
            useNewUrlParser:true,
            useUnifiedTopology:true


        } as mongoose.ConnectOptions);
        console.log('monogoDB connected');
    }catch(err){
        console.error('mongoDB connection error:',err);
        process.exit(1);
    }
}

export default connectDB;