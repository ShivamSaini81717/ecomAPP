import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

mongoose.set('strictQuery', false);

export const connectDatabase = async() => {
    try{
  const {connection}= await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  console.log(`Mongoose Connected ${connection.host}`);
        
    }
catch(error){
console.log("some error ",error);
process.exit(1);
}
}

