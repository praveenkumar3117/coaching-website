const Video = require('../models/Video');

exports.AddVideo = async (req, res) => {
    try {

        const { title, email, subject, teacher, chapterNum, JEE, NEET, category, Date, vidurl, lecture, courseName } = req.body;
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
            email,
            courseName
        })

        res.status(201).json(video)

    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

exports.FetchVideosFaculty = async (req, res) => {
    try {
        const email = req.body.email;
        const courseName = req.body.courseName;
        const subject = req.body.subject;
        if (email&&courseName&&subject) {
            const data = await Video.find({ "email": email, courseName:courseName, subject: subject }).populate('title').populate('vidurl').populate('chapter').populate('lecture').populate('pic')
            console.log(data);
            res.status(200).json(data)
        } else {
            res.status(201).json({ success: false })
        }
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

// for normal coaching user
exports.fetchVideo = async (req, res) => {
    try {
        const batch = req.body.batch
        const subject = req.body.subject
        const category = req.body.category
        const courseName = req.body.courseName
        const data = await Video.find({"courseName": courseName, [batch]: true, "subject": subject, "category": category }).populate('title').populate('vidurl').populate('teacher').populate('chapter').populate('lecture').populate('pic')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}

// for user2
exports.fetchVideoWithCourseName = async (req, res) => {
    try {
        const courseName = req.body.courseName
        const data = await Video.find({ 'courseName': courseName }).populate('title').populate('vidurl').populate('chapter').populate('lecture').populate('pic')
        res.status(200).json(data)
    } catch (error) {
        res.status(500).send({
            success: false,
            message: error.message
        })
    }
}