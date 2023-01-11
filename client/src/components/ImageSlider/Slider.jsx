import React from "react"
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { useState } from "react"
import { useEffect } from "react"


const Image = () => {
  
  const [images, setImages]= useState([]);

	useEffect(()=>{
		const fetchImages = async ()=>{
			fetch('http://localhost:5000/api/images/slider-images',{
				method:'get',
				headers:{
					'Content-Type':'application/json'
				}
			}).then((response)=>{
				response.json().then((data)=>{
					setImages([...data]);
					console.log(data)
					console.log(images)
				})
			})
		}

		fetchImages();

	}, [])

	const zoomInProperties = {
		indicators: false,
		scale: 1.2,
		duration: 1000,
		transitionDuration: 500,
		infinite: true,
		prevArrow:(
			<div>
			</div>
		),
		nextArrow: (
			<div></div>
		)
	};

  return (
     <>
     <div className="pt-20 lg:pt-20 md:pt-24">
			<Zoom {...zoomInProperties}>
				{images.map((img, index) => (
					<div key={index} className="flex justify-center w-full mx-auto">
						<img
							className="object-scale-down shadow-xl"
							src={img.url}
                            alt='images'
						/>
					</div>
				))}
			</Zoom>
		</div>
     </>
  )
}

export default Image