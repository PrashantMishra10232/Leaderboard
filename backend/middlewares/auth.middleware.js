import {ApiError} from "../utils/ApiError.js"
import {User} from "../Models/user.model.js"
import jwt from "jsonwebtoken"

export const isAuthenticatedUser = async(req, _, next)=>{
    try {
        const token = req.cookies?.accessToken || req.header
        ("Authorization")?.replace("Bearer ", "").trim()        
    
        if(!token){
            throw new ApiError(401, "Unauthorized request. No token provided.")
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await User.findById(decodedToken?._id).select("-password")
    
        if(!user){
            throw new ApiError(401, "Invalid Access Token. User not found.")
        }
    
        req.user = user;

        next()
    } catch (error) {
        console.error("Authentication Error:", error.message); 
        throw new ApiError(401, "invalid access Token");
        
    }
}