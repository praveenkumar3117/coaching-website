const SliderImages = require("../models/SliderImages");

exports.AddSliderImage = async(req,res)=>{
    try{
        const url = req.body.url;
        const result = await SliderImages.create({
            url:url
        })
        if(url===null || url===undefined || url===[]){
            res.status(400).json({
                success:false
            });
        }
        res.status(201).json(result);
    }catch(err){
        res.status(500).json({
            success:false,
            message:err.message
        })
    }
}