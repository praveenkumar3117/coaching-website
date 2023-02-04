const Razorpay = require('razorpay')
const crypto = require('crypto')
const Payment = require('../models/Payment')

const instance = new Razorpay({
    key_id: "rzp_test_JF6x9X3JSZYaJG",
    key_secret: "rD42VmvSlyq7gruoZzfoFC2Z"
});


exports.checkout = async (req, res) => {
    try {
        const options = {
            amount: Number(req.body.amount * 100),
            currency: "INR",
        };
        const order = await instance.orders.create(options);

        res.status(200).json({
            success: true,
            order,
        });
    } catch (error) {
        res.send(500).send(error.message)
    }
}

exports.paymentVerification = async (req, res) => {
    try {
        const { razorpay_order_id, razorpay_payment_id, razorpay_signature } =
            req.body;

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
                success: false,
            });
        }
    } catch (error) {
        res.send(500).send(error.message)
    }
}

exports.getKey = (req, res) => {
    res.status(200).json({ key: "rzp_test_JF6x9X3JSZYaJG" })
}