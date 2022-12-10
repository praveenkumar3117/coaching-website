const express = require('express')
const { FetchVideosJEEPHY,FetchVideosJEEMATH,FetchVideosJEECHEM,FetchVideosFoundBIO,FetchVideosFoundMATH,FetchVideosFoundCHEM,FetchVideosFoundPHY,FetchVideosNEETCHEM,FetchVideosNEETBIO,FetchVideosNEETPHY, FetchVideosFaculty } = require('../controllers/Video')

const router = express.Router()

router.route('/JEE/Physics').get(FetchVideosJEEPHY)
router.route('/JEE/Maths').get(FetchVideosJEEMATH)
router.route('/JEE/Chemistry').get(FetchVideosJEECHEM)

router.route('/NEET/Physics').get(FetchVideosNEETPHY)
router.route('/NEET/Chemistry').get(FetchVideosNEETCHEM)
router.route('/NEET/Biology').get(FetchVideosNEETBIO)

router.route('/Foundation/Physics').get(FetchVideosFoundPHY)
router.route('/Foundation/Maths').get(FetchVideosFoundMATH)
router.route('/Foundation/Chemistry').get(FetchVideosFoundCHEM)
router.route('/Foundation/Biology').get(FetchVideosFoundBIO)

router.route('/faculty').post(FetchVideosFaculty)

module.exports = router