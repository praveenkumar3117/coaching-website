const Video = require('../models/Video');

exports.AddVideo = async(req, res) => {
    try{

        const {title, subject, teacher, chapterNum, JEE, NEET, Foundation, Date, vidurl}=req.body;
        console.log(req.body);
        const chapter = chapterNum;
        let video = await Video.create({
            title,
            subject, 
            Date,
            teacher,
            chapter,
            JEE,
            NEET,
            Foundation,
            vidurl
        })

        if(res.status(201)){
            res.send({
                success:true,
                _id:video._id,
                title: video.title,
                subject:video.subject,
                teacher:video.teacher,
                chapter:video.chapter,
                JEE:video.JEE,
                NEET: video.NEET,
                Foundation:video.Foundation,
                Date:video.Date,
                vidurl:video.vidurl
            })
        }
        
    } catch(error){
        res.status(500).send({
            success:false,
            message:error.message
        })
    }
}
