const SliderImages = require('../models/SliderImages');
const TeacherImages = require('../models/TeacherImages');

exports.getSliderImages = async (req, res) => {
    try {
        const images = await SliderImages.find({});
        res.status(201).json(images);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

exports.getTeacherImages = async (req, res) => {
    try {
        const images = await TeacherImages.find({});
        res.status(201).json(images);
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}


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
        const exp = req.body.exp;

        const result = await TeacherImages.create({
            url:url,
            tName:tName,
            exp: exp
        })
        
        res.status(201).json(result);

    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

exports.removeSliderImages = async(req, res)=>{
    try{
        const id = req.body._id;
        const deleted = await SliderImages.findByIdAndDelete(id);
        // deleted.success=true;
        res.status(201).json({deleted, success:true});

    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}

exports.removeTeacherImages = async(req, res)=>{
    try{
        const id = req.body._id;
        const deleted = await TeacherImages.findByIdAndDelete(id);
        res.status(201).json({deleted, success:true});

    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}