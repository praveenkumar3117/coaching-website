const { find, findOne } = require('../models/Video');
const Video = require('../models/Video');

exports.AddVideo = async(req, res) => {
    try{

        const {title, subject, teacher, chapterNum, JEE, NEET, Foundation, Date, vidurl,lecture}=req.body;
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
            vidurl,
            lecture
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
                vidurl:video.vidurl,
                lecture:video.lecture
            })
        }
        
    } catch(error){
        res.status(500).send({
            success:false,
            message:error.message
        })
    }
}

exports.FetchVideos = async(req, res)=>{

    // const data = Video.find({"JEE":true})
    let data = await Video.find(req)
    
    // data = await data;
    console.log(data)
    res.send("Done")
}