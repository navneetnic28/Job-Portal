import mongoose from "mongoose";
const applicationSchema = new mongoose.Schema({
    job:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'job',
        required:true
    },
    applicant:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    status:{
       type:String,
       enum:['pendintg','accept','reject'],
       default:'pending'
    },},{
        timestamps:true,
    
});
export const Application = mongoose.model(" Application",applicationSchema);