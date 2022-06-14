const express = require('express');
const { getfile ,getfileById} = require('../controllers/dataController');


const router = express.Router()


router.route("/get").get(getfile)
router.route("/get/:id").get(getfileById)



module.exports = router;
