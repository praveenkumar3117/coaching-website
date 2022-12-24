const Test = require('../models/Test')

exports.createTest = async (req, res) => {
    try {

        const { chapterName, subject, JEE, NEET, Foundation, batchYear, tCode, testUrl } = req.body

        let test = await Test.findOne({ chapterName })
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
            tCode,
            testUrl
        })

        if (res.status(201)) {
            res.send({
                success: true,
                test
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
        let batchYear = req.body.batchYear
        let JEE = req.body.JEE
        let NEET = req.body.NEET
        let Foundation = req.body.Foundation
        let subject = req.body.subject
        const data = await Test.find({ "JEE": JEE, "NEET":NEET,"Foundation":Foundation ,"subject": subject, "batchYear": batchYear }).populate('chapterName').poplulate('tCode').populate('testUrl')
        res.status(201).json(data)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}
