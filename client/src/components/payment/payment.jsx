import React from 'react'
import Card from './Card'
import axios from 'axios'

const Payment = () => {

    const checkoutHandler = async (amount) => {

        const { data:{ key } } = await axios.get('http://localhost:5000/api/payment/getKey')

        const { data:{ order } } = await axios.post("http://localhost:5000/api/payment/checkout", {
            amount
        })

        const options = {
            key: key, 
            amount: order.amount, 
            currency: "INR",
            name: "Vulture Institute",
            description: "Test Transaction",
            image: "https://drive.google.com/file/d/1GMudk9jWfEYGBZ19klA6qwFvDNA4w_2d/view?usp=share_link",
            order_id: order.id,
            callback_url: "http://localhost:5000/api/payment/paymentVerification",
            prefill: {
                name: "Gaurav Kumar",
                email: "gaurav.kumar@example.com",
                contact: "9000090000"
            },
            notes: {
                "address": "Razorpay Corporate Office"
            },
            theme: {
                "color": "#3399cc"
            }
        }
        const razor = new window.Razorpay(options);
        razor.open()
    }

    
    return (
        <div>
            <Card amount={5000} checkoutHandler={checkoutHandler} />
        </div>
    )
}

export default Payment