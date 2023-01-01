const Test = require('../models/Test')

exports.createTest = async (req, res) => {

    try {
        const { Physics, Chem, Maths, Bio, JEE, NEET, Foundation, batchYear, testUrl, testNum, startTime, endTime } = req.body

        let test = await Test.findOne({ testUrl })
        if (test) {
            return res.status(404).send({ success: false, message: 'Test already exists' })
        }

        test = await Test.create({
            Physics,
            Chem,
            Maths,
            Bio,
            JEE,
            NEET,
            Foundation,
            batchYear,
            testUrl,
            testNum,
            startTime,
            endTime
        })

        if (res.status(201)) {
            res.send({
                success: true,
                test
            })
        } else {
            res.send({
                success: false
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

        const data = await Test.findOne({
            "batchYear": batchYear, [batch]: true, startTime: {
                $lt: new Date() // check startTime with current Time
            }, endTime: {
                $gt: new Date() // check endTime with current Time
            }
        }).populate('testUrl').populate('Physics').populate('Bio').populate('Chem').populate('Maths').populate('startTime').populate('endTime').populate('testNum');

        res.status(201).json(data)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

exports.listTestsSuper = async (req, res) => {
    try {
        const { batchORsubject } = req.body;
        let data = null;

        if (batchORsubject === "JEE" || batchORsubject === "NEET" || batchORsubject === "Foundation") {
            data = await Test.find({ batchORsubject });
        } else {
            data = await Test.find({ [batchORsubject]: true })
        }

        if (res.status(201) && batchORsubject !== undefined) {
            res.json(data);
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

exports.listTestsTeacher = async (req, res) => {

    const teacher = req.body.teacher;
    try {
        const data = await Test.find({ teacher });

        if (res.status(201)) {
            res.json(data);
        } else {
            res.json({ success: false });
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}
