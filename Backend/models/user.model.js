import mongoose from "mongoose";
const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phoneNumber:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['student','Recruiter'],
        default:'Student',
        required:true
    }
    profile:{
        bio:{
          type:String,
            }
        skills:[{
            type:String
        }],
        resume:{
            type:string //URL to resume file
        },
        resumeOriginalname:{
        type:string
        },
        company:{
            type:mongoose.Schema.Types.ObjectId,
            ref: "Company"
        },
        profilePhoto:{
            type: String,
            default:"",
        },

        
    }

}
{timestamps:true}
);

export const User =mongoose.model("User",userSchema);