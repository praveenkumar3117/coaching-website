const nodemailer = require('nodemailer');

exports.MessageMailer = async (req, res)=>{

    try{
        const {name, senderEmail, phone, visitorMessage } = req.body;

        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user: "vultureinstitute123@gmail.com",
                pass:"xcdczkrnkmefuhqp" // to be hashed or done something with it to secure it
            },
            secure:true,
            host:'smtp.gmail.com',
            port: 465

        })

        const mailInfo = await transporter.sendMail({
            from:'vultureinstitute123@gmail.com',
            to:'vultureinstitute123@gmail.com',
            subject:`New Message from ${senderEmail}, Website Visitor`,
            text:'This is the mail from contact page',
            html:`<p>Message from user: <h1>${name}</h1> </br> Email: <h1>${senderEmail}</h1> </br> Phone: <h1>${phone}</h1> </br> Message: <h2>${visitorMessage}</h2></p>`
        })
        
        if(res.status(201)){
            res.send({
                success:true
            })
        }else{
            res.send({
                success:false
            })
        }

    }catch(err){
        res.status(500).send({
            success:false,
            message: err.message
        })
    }
}