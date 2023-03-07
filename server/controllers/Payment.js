const Razorpay = require('razorpay')
const crypto = require('crypto')
const Payment = require('../models/Payment')

const instance = new Razorpay({
    key_id: "rzp_test_mQT2hOwfgh1POz",
    key_secret: "knSoRjBjP7kvytO2hxPqwosk"
});


exports.checkout = async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.amount * 100),
            currency: "INR",
        };
        const order = await instance.orders.create(options);
        console.log(order)
        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.paymentVerification = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            req.body;
        console.log(req.body);
        const body = razorpay_order_id + "|" + razorpay_payment_id;

        const expectedSignature = crypto
            .createHmac("sha256", "rD42VmvSlyq7gruoZzfoFC2Z")
            .update(body.toString())
            .digest("hex");

        const isAuthentic = expectedSignature === razorpay_signature;

        if (isAuthentic) {

            await Payment.create({
                razorpay_order_id,
                razorpay_payment_id,
                razorpay_signature,
            });

            res.redirect(
                `http://localhost:3000/paymentsuccess?reference=${razorpay_payment_id}`
            );
        } else {
            res.status(400).json({
                razorpay_signature:razorpay_signature,
            });
        }
    } catch (error) {
        res.status(500).send(error.message)
    }
}

exports.getKey = (req, res) => {
    res.status(200).json({ key: "rzp_test_mQT2hOwfgh1POz" })
}