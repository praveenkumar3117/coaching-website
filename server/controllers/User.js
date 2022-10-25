const generateToken = require('../generateToken')
const User = require('../models/User')
const RegistrationMailer = require('../middleware/RegistrationMail');

exports.registerUser = async (req, res) => {
    try {

        const { name, email, password, phone, enRoll, batch, year, pic, role, fatherName } = req.body

        let user = await User.findOne({ email })
        if (user) {
            return res.status(404).send({ success: false, message: 'User already exists' })
        }

        user = await User.create({
            name,
            email,
            password,
            phone,
            enRoll,
            batch,
            year,
            role,
            pic,
            fatherName
        })

        if(res.status(201)){
            // Sending Mail
            RegistrationMailer(user.email, password);

            res.send({
                success:true,
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                enRoll: user.enRoll,
                batch: user.batch,
                year: user.year,
                pic: user.pic
            })
        }

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

exports.authUser = async (req, res) => {
    try {

        const { email, password } = req.body
        const user = await User.findOne({ email }).select('+password')

        if (user && ((await user.matchPassword(password)))) {
            res.status(201).send({
                success:true,
                name: user.name,
                email: user.email,
                enRoll: user.enRoll,
                fatherName: user.fatherName,
                pic: user.pic,
                token: generateToken(user._id),

            })
        }
        else {
            res.status(401);
            throw new Error("Wrong Email or Password");
        }


    } catch (error) {

        res.status(500).send({
            success: false,
            message: error.message,

        })

    }
}
