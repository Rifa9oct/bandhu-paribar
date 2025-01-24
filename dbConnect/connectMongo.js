import mongoose from "mongoose";

export default async function connectMongo() {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            dbName: "bandhu_paribar",
          });
        console.log("Connected");
        return connect;
    } catch(err){
        console.log(err);
    }
}