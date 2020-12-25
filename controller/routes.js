const express = require("express");
const mycourse = require("./mycourse");
const courseDetails =require('./courseDetails')
const router = express.Router();


router.get("/mycourse",mycourse.courses );
router.get("/coursedetails",courseDetails.details );



module.exports = router;




