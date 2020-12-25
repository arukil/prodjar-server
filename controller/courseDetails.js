const CourseDetails = require('../model/courseDetails');

exports.details = async (req, res) => {
    await CourseDetails.findOne({course:req.query.course}, (err, data) => {
        if (err)
            res.send(err)
        else
            res.status(200).json({ data })
    })
}