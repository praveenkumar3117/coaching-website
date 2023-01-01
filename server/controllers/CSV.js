const TestCSV = require("../models/TestCSV")

exports.createCSV = async () => {
    try {
        const { url, JEE, NEET, Foundation, testNum, batchYear, Physics, Chem, Maths, Bio, startTime, endTime, testUrl } = req.body
        let csv = await TestCSV.findOne(testUrl)
        if (csv) {
            return res.status(404).send({ success: false, message: 'Test details already exists' })
        }
        csv = await TestCSV.create({
            url,
            testNum,
            batchYear,
            Physics,
            Chem,
            Maths,
            Bio,
            startTime,
            endTime,
            testUrl,
            JEE,
            NEET,
            Foundation
        })

        res.status(201).json(csv)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

exports.listCSV = async (req, res) => {
    try {
        const batch = req.body.batch
        const batchYear = req.body.batchYear

        const data = await TestCSV.find({ 'batchYear': batchYear, [batch]: True }).populate('startTime').populate('endTime').populate('url').populate('testNum').populate('testUrl').populate('subject')
        res.status(201).json(data)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}