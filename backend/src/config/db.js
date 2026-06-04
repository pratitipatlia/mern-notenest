import mongoose from "mongoose";
import dns from "dns";

// Force Node.js to use Google DNS
dns.setServers(['8.8.8.8', '8.8.4.4']);

export const connectDb = async()=>{
    try{
       await mongoose.connect(process.env.mongo_uri);
       console.log("MONGODB CONNECTED SUCCESSFULLY")
    }
    catch(error){
        console.error("Error connecting to mongo", error);
        process.exit(1)// exit with failure
    }
};