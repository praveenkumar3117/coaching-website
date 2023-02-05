const Course = require('../models/Course');

exports.AddCourse = async (req, res) => {
    try {
        const { title, JEE, NEET, category, Date,Fees } = req.body;
        let course = await Course.create({
            title,
            Date,
            JEE,
            NEET,
            category,
            Fees
        })
        res.status(201).json(course)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

exports.FetchCourse = async (req, res) => {
    try {
        const data = await Course.find({})
        res.status(201).json(data)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

exports.FetchCourseWithCategory = async (req, res) => {
    try {
        const cat = req.body.category
        const batch = req.body.batch
        const data = await Course.find({ [batch]: true, "category": cat }).populate('title').populate('Date')
        res.status(201).json(data)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

exports.FetchCourseWithUser2 = async (req, res) => {
    try {
        const email = req.body.email
        const data = await Course.find({})
        const result = []
        data.forEach(item => {
            if (item.user2Array.includes(email)) {
                result.push(item)
            }
        })
        res.status(201).json(result)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message  
        })
    }
}