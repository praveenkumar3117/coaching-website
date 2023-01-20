const { find, findOne } = require('../models/Video');
const Video = require('../models/Video');

exports.AddVideo = async(req, res) => {
    try{

        const {title, email, subject, teacher, chapterNum, JEE, NEET, category, Date, vidurl,lecture}=req.body;
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
            category,
            vidurl,
            lecture,
            email
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
                category:video.category,
                Date:video.Date,
                vidurl:video.vidurl,
                lecture:video.lecture,
                email: video.email
            })
        }
        
    } catch(error){
        res.status(500).send({
            success:false,
            message:error.message
        })
    }
}

exports.FetchVideosFaculty = async(req, res)=>{
    try{
        const email = req.body.email;
        if(email){
            const data = await Video.find({"email" : email}).populate('title').populate('vidurl').populate('teacher').populate('chapter').populate('lecture').populate('pic')
            console.log(data);
            res.status(200).json(data)
        }else{
            res.status(201).json({success:false})
        }
    }catch(error){
        res.status(500).send({
            success:false,
            message:error.message
        })
    }
}

exports.fetchVideo = async(req,res)=>{
    try {
        const batch = req.body.batch
        const subject = req.body.subject
        const category = req.body.category
        const data = await Video.find({[batch]:true,"subject":subject,"category":category}).populate('title').populate('vidurl').populate('teacher').populate('chapter').populate('lecture').populate('pic')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({
             success:false,
             message:error.message
         })
    }
}