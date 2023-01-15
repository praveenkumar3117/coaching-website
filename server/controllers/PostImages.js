const SliderImages = require("../models/SliderImages");
const TeacherImages = require("../models/TeacherImages");

exports.AddSliderImage = async(req,res)=>{
    try{
        const url = req.body.url;
        
        if(url===null || url===undefined || url===[]){
            res.status(400).json({
                success:false
            });
        }

        const result = await SliderImages.create({
            url:url
        })
        res.status(201).json(result);
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

exports.AddTeacherImage = async(req, res)=>{
    try{
        const url = req.body.url;
        const tName = req.body.tName;

        const result = await TeacherImages.create({
            url:url,
            tName:tName
        })
        
        res.status(201).json(result);

    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}