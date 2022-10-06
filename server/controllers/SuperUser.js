const generateToken = require('../generateToken')
const SuperUser = require('../models/SuperUser')

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body
        const superUser = await SuperUser.findOne({ email }).select('+password')

        if (superUser && (await superUser.matchPassword(password))) {
            let token =  generateToken(superUser._id)
            res.status(201).send({
                _id: superUser._id,
                email: superUser.email,
                token: token,
            });
        }
        else {
            res.status(401).send({
                _id:null,
                email: null,
                token: null
            });
        }

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}