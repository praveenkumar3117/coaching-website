const nodemailer = require('nodemailer');

const RegistrationMailer = async (senderEmail, password)=>{

    try{
        const transporter = nodemailer.createTransport({
            service:"gmail",
            auth:{
                user: "vultureinstitute123@gmail.com",
                pass:"xcdczkrnkmefuhqp"
            },
            secure:true,
            host:'smtp.gmail.com',
            port: 465

        })

        const mailInfo = await transporter.sendMail({
            from:'vultureinstitute123@gmail.com',
            to:senderEmail,
            subject:'Your credentials for vulture institute website',
            text:'This is the mail for sending password',
            html:`<p>Hey, Welcome to Vulture Institute,Your Email for login is <h1>${senderEmail}</h1> </br> Your password is </br> <h1>${password}</h1></br>Do not share this with anyone. </br>We hope you'll enjoy joining us.</p>`
        })

        console.log(mailInfo);

    }catch(err){
        throw new Error("Couldn't send email");
    }
}

module.exports = RegistrationMailer;