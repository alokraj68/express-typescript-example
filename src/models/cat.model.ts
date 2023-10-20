import mongoose, { Schema } from "mongoose";

const cat = mongoose.model(
    'Cats',
    new Schema({
        name:{
            type:String
        }
    })
);

export default cat;