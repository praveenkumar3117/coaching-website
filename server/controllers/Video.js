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

exports.FetchVideosJEEPHY = async(req, res)=>{
    try {
        const data = await Video.find({"JEE":true, "subject":"Physics"}).populate('title').populate('vidurl').populate('teacher').populate('chapter').populate('lecture').populate('pic')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({
            success:false,
            message:error.message
        })
    }
}

exports.FetchVideosJEECHEM = async(req, res)=>{
    try {
        const data = await Video.find({"JEE":true, "subject":"Chemistry"}).populate('title').populate('vidurl').populate('teacher').populate('chapter').populate('lecture').populate('pic')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({
            success:false,
            message:error.message
        })
    }
}

exports.FetchVideosJEEMATH = async(req, res)=>{
    try {
        const data = await Video.find({"JEE":true,"subject":"Maths"}).populate('title').populate('vidurl').populate('teacher').populate('chapter').populate('lecture').populate('pic')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({
            success:false,
            message:error.message
        })
    }
}

exports.FetchVideosNEETBIO = async(req, res)=>{
    try {
        const data = await Video.find({"NEET":true,"subject":"Biology"}).populate('title').populate('vidurl').populate('teacher').populate('chapter').populate('lecture').populate('pic')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({
            success:false,
            message:error.message
        })
    }
}

exports.FetchVideosNEETCHEM = async(req, res)=>{
    try {
        const data = await Video.find({"NEET":true,"subject":"Chemistry"}).populate('title').populate('vidurl').populate('teacher').populate('chapter').populate('lecture').populate('pic')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({
            success:false,
            message:error.message
        })
    }
}

exports.FetchVideosNEETPHY = async(req, res)=>{
    try {
        const data = await Video.find({"NEET":true,"subject":"Physics"}).populate('title').populate('vidurl').populate('teacher').populate('chapter').populate('lecture').populate('pic')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({
            success:false,
            message:error.message
        })
    }
}

exports.FetchVideosFoundPHY = async(req, res)=>{
    try {
        const data = await Video.find({"Foundation":true,"subject":"Physics"}).populate('title').populate('vidurl').populate('teacher').populate('chapter').populate('lecture').populate('pic')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({
            success:false,
            message:error.message
        })
    }
}

exports.FetchVideosFoundCHEM = async(req, res)=>{
    try {
        const data = await Video.find({"Foundation":true,"subject":"Chemistry"}).populate('title').populate('vidurl').populate('teacher').populate('chapter').populate('lecture').populate('pic')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({
            success:false,
            message:error.message
        })
    }
}

exports.FetchVideosFoundMATH = async(req, res)=>{
    try {
        const data = await Video.find({"Foundation":true,"subject":"Maths"}).populate('title').populate('vidurl').populate('teacher').populate('chapter').populate('lecture').populate('pic')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({
            success:false,
            message:error.message
        })
    }
}

exports.FetchVideosFoundBIO = async(req, res)=>{
    try {
        const data = await Video.find({"Foundation":true,"subject":"Biology"}).populate('title').populate('vidurl').populate('teacher').populate('chapter').populate('lecture').populate('pic')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({
            success:false,
            message:error.message
        })
    }
}

exports.FetchVideosFaculty = async(req, res)=>{
    try{
        const data = await Video.find({"email":req.email}).populate('title').populate('vidurl').populate('teacher').populate('chapter').populate('lecture').populate('pic')
        res.status(200).json(data)
    }catch(error){
        res.status(500).send({
            success:false,
            message:error.message
        })
    }
}