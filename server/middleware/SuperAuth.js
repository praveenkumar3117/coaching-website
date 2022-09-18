const jwt = require("jsonwebtoken");
const SuperUser = require("../models/SuperUser");
const asyncHandler = require("express-async-handler");

const Superprotect = asyncHandler(async (req, res, next) => {
    let token;

    if (
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ) {
        try {
            token = req.headers.authorization.split(" ")[1];

            //decoded token id
            const decoded = jwt.verify(token, "process.env.secret")

            let user = await SuperUser.findById(decoded.id).select("-password") 
            if(user === null)
            { 
                res.status(404)
                throw new Error("Not authorized, token failed");
            }
            else{
                req.superUser = user
            }

            next();
        } catch (error) {
            res.status(401);
            throw new Error("Not authorized, token failed");
        }
    }

    if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
    }
});

module.exports = { Superprotect };