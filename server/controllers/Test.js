const Test = require('../models/Test')

exports.createTest = async (req, res) => {
    
    try {
        const { chapterName, subject, JEE, NEET, Foundation, batchYear, testUrl, testNum } = req.body

        let test = await Test.findOne({ testUrl })
        if (test) {
            return res.status(404).send({ success: false, message: 'Test already exists' })
        }

        test = await Test.create({
            chapterName,
            subject,
            JEE,
            NEET,
            Foundation,
            batchYear,
            testUrl, 
            testNum
        })

        if (res.status(201)) {
            res.send({
                success: true,
                test
            })
        }else{
            res.send({
                success:false
            })
        }

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

exports.listTests = async (req, res) => {
    try {
        const batchYear = req.body.batchYear
        const batch = req.body.batch;
        const data = await Test.findOne({"batchYear": batchYear, [batch]:true }).populate('chapterName').populate('testUrl').populate('subject')
        res.status(201).json(data)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

exports.listTestsSuper = async(req, res)=>{
    try{
        const {batchYear, batch} = req.body;
        const data = await Test.find({batchYear, batch});
        
        if(res.status(201)){
            res.json(data);
        }else{
            res.json({success:false});
        }
    }catch(error){
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

exports.listTestsTeacher = async(req, res)=>{

    const teacher = req.body.teacher;
    try{
        const data = await Test.find({teacher});
        
        if(res.status(201)){
            res.json(data);
        }else{
            res.json({success:false});
        }
    }catch(error){
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}
