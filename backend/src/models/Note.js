import mongoose from "mongoose";

//schema
//model based on the schema

const noteSchema= new mongoose.Schema({
    title: {
    type:String,
    required: true,
    },
    content:{
        type: String,
        required: true,
    },
},
{timestamps:true}// created/ updateat
);

const Note = mongoose.model("Note", noteSchema)
export default Note;