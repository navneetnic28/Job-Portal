import User from "../models/user.model.js";
import bcrypt from "bcryptjs";


export const register = async(req, res) =>{
    try{
        const {
            fullname,email,phoneNumber,password,role}=req.body;
            if(!fullname || !email || !phoneNumber || !password || !role){
                return res.status(404).json({
                    message:"Missing required fields",
                    success: false,
                });
            }
            const user =await User.findOne({email});
            if (user){
                return res.status(404).json({
                    message:"email already exists",
                    success: false;

                });
            }
       const hashedPassword =await bcrypt.hash(password,10);
       const newUser = new User({
        fullname,
        email,
        phoneNumber,
        password: hashedPassword,
        role,
       })



        }

    catch(error){
    console.error(error);
    res.status(500).json({
        message: "Serve Error",
        success: flase,
    });
  
    }
};

export const login =async (req,res) => {
    try{
        const{email,password,role}=req.body;
        if(!email || !password || !role){
            return res.status(404).json({
                message: "Missing required fields",
                success: flase,
            });
        }
      const user = await User.findOne({email});
      if ( !user ) {
        return res.status(404).json({
            message: " Incorrect Email or password",
            success: false,
        });
      }

      const ismatch = await bcrypt.compare(password,user.password);
      if(!ismatch){
        return res.status(404).json({
message: " Incorrect Email or password",
success: false,
})
      }
      if(user.role !== role){
        return res.status(403).json({
            message: "you dont have neccessary role to access this resource",
            success:false,
        })
      }

    }

    catch(error){

    }
};

