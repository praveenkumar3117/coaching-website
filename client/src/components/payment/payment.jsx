import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
import shortid from 'shortid'

const Payment = () => {
    const [courses, setCourses] = useState([])

    const checkoutHandler = async (amount) => {

        const { data:{ key } } = await axios.get('http://localhost:5000/api/payment/getKey')

        const { data:{ order } } = await axios.post("http://localhost:5000/api/payment/checkout", {
            amount
        })

        console.log(order)

        const options = {
            key: key, 
            amount: order.amount, 
            currency: "INR",
            name: "Vulture Institute",
            description: "Test Transaction",
            image: "https://drive.google.com/file/d/1GMudk9jWfEYGBZ19klA6qwFvDNA4w_2d/view?usp=share_link",
            order_id: order.id,
            callback_url: "http://localhost:5000/api/payment/paymentVerification",
            handler: function (response){
                alert(response.razorpay_payment_id);
                alert(response.razorpay_order_id);
                alert(response.razorpay_signature)
            },
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


    const fetchCourses = async () => {
        const email = JSON.parse(localStorage.getItem('data')).result.email;
        return fetch('http://localhost:5000/api/Courses/fetch-course-not-in-user2', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({email})
        }).then(
            (response)=>

            response.json().then((data)=>{
                setCourses(data)
                console.log(courses)
            })
        )
    }

    useEffect(() => {

        fetchCourses();
    
    }, [])

    
    return (
        <div className='pt-24 grid lg:grid lg:grid-cols-3 lg:grid-row-3 flex-col justify-center items-center'>
            {
                courses.map((item, index) => (
                    <Card key={shortid.generate()} amount={item.Fees} checkoutHandler={checkoutHandler} />

                ))
            }

        </div>
    )
}

export default Payment