const Course = require('../model/mycourse');

exports.courses = async (req, res) => {
    await Course.find({}, (err, data) => {
        if (err)
            res.send(err)
        else
            res.status(200).json({ data })
    })
}