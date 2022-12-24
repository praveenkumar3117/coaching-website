const jwt = require('jsonwebtoken');
const User = require('../models/User')
const Teacher = require('../models/Teacher')
const SuperUser = require('../models/SuperUser')


exports.checkAuthUser = async(req, res)=>{
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        
        try {
            token = req.headers.authorization.split(" ")[1];

            //decoded token id
            const decoded = jwt.verify(token, "process.env.secret");

            const user = await User.findById(decoded.id).select("-password");
            if(user){
                res.status(200).json({success:true})
            }else{
                res.status(401).json({success:false})
            }

        } catch (error) {
            res.status(401).json({success:false});
            // throw new Error("Not authorized, token failed");
        }
    }

    if (!token) {
        res.status(401).json({success:false});
        // throw new Error("Not authorized, no token");
    }
}
exports.checkAuthTeacher = async(req, res)=>{
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        
        try {
            token = req.headers.authorization.split(" ")[1];

            //decoded token id
            const decoded = jwt.verify(token, "process.env.secret");

            const user = await Teacher.findById(decoded.id).select("-password");
            if(user){
                res.status(200).json({success:true})
            }else{
                res.status(401).json({success:false})
            }

        } catch (error) {
            res.status(401).json({success:false});
            // throw new Error("Not authorized, token failed");
        }
    }

    if (!token) {
        res.status(401).json({success:false});
        // throw new Error("Not authorized, no token");
    }
}
exports.checkAuthSuper = async(req, res)=>{
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        
        try {
            token = req.headers.authorization.split(" ")[1];

            //decoded token id
            const decoded = jwt.verify(token, "process.env.secret");

            const user = await SuperUser.findById(decoded.id).select("-password");
            if(user){
                res.status(200).json({success:true})
            }else{
                res.status(401).json({success:false})
            }
        } catch (error) {
            res.status(401).json({success:false});
            // throw new Error("Not authorized, token failed");
        }
    }

    if (!token) {
        res.status(401).json({success:false});
        // throw new Error("Not authorized, no token");
    }
}
