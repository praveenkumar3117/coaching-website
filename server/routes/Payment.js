const express = require('express')
const  { checkout,paymentVerification, getKey } = require('../controllers/Payment')

const router = express.Router()

router.route('/checkout').post(checkout)
router.route('/paymentVerification').post(paymentVerification)
router.route('/getKey').get(getKey)

module.exports = router