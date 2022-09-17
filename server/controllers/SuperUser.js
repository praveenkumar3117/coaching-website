const generateToken = require('../generateToken')
const SuperUser = require('../models/SuperUser')

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const superUser = await SuperUser.findOne({ email }).select('+password')

        if (superUser && (await superUser.matchPassword(password))) {
            res.status(201).json({
                _id: superUser._id,
                email: superUser.email,
                token: generateToken(superUser._id)
            })
        }
        else {
            res.status(401);
            throw new Error("Invalid Email or Password");
        }

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}