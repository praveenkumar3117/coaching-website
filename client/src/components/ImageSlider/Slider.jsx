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
				})
			})
		}

		fetchImages();
	}, [])

	const zoomInProperties = {
		indicators: false,
		scale: 1.2,
		duration: 2000,
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
     <div className="-z-20 ">
			<Zoom {...zoomInProperties}>
				{images.map((img, index) => (
					<div key={index} className="flex -z-20 justify-center w-screen mx-auto">
						<img
							className="w-10/12 shadow-xl"
							src={img.url}
                            alt='images'
						/>
					</div>
				))}
			</Zoom>
		</div>
  )
}

export default Image