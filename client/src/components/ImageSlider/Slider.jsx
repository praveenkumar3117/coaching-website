import React from "react"
import img1 from './slider/iitrpr1.jpg'
import img2 from './slider/iitrpr2.jpg'
import img3 from './slider/AIR_2019-1.png'
import img4 from './slider/AIR_2017.png'
import img5 from './slider/AIR_2015-1.png'
import img6 from './slider/AIR_2013.png'
import { AiOutlineDoubleRight, AiOutlineDoubleLeft } from 'react-icons/ai'
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";


const Image = () => {
  
  const images = [
		img1,
		img2,
		img3,
		img4,
		img5,
    img6
	];

	const zoomInProperties = {
		indicators: true,
		scale: 1.2,
		duration: 5000,
		transitionDuration: 500,
		infinite: true,
		prevArrow:(
			<div>
			</div>
		),
		nextArrow: (
			<div></div>
		)
		// prevArrow: (
		// 	<div>
		// 		 <AiOutlineDoubleLeft className="hidden lg:block md:text-5xl md:mx-60 bg-gray-200 p-2 rounded-lg"/>
		// 	</div>
		// ),
		// nextArrow: (
		// 	<div >
		// 	<AiOutlineDoubleRight className="hidden lg:block md:text-5xl md:mx-60 bg-gray-200 p-2 rounded-lg"/>
		// 	</div>
		// ),
	};

  return (
     <>
     <div className="pt-20 lg:pt-20 md:pt-24">
			<Zoom {...zoomInProperties}>
				{images.map((img, index) => (
					<div key={index} className="flex justify-center w-full mx-auto">
						<img
							className="lg:w-full object-cover shadow-xl"
							src={img}
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