import React from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";


function Card(props) {
    const review = props.review; 

    return (
        <div className="flex flex-col md:relative">
            <div className="absolute top-[-7rem] z-[10] mx-auto">
                <img
                    className="aspect-square w-[140px] h-[140px] rounded-full z-[25]" 
                    src={review.image} alt="Testimonial-photo">
                </img>
                <div className="w-[140px] h-[140px] rounded-full z-[-10] bg-violet-500 top-[-2px] left-[10px] absolute"></div>
            </div>
            <div className="text-center mt-7">
                <p className="font-bold text-2xl capitalize">{review.name}</p>
                <p className=" tracking-wider text-violet-300 uppercase color">{review.job}</p>
            </div>
            <div className="text-violet-400 m-auto mt-2">
                <FaQuoteLeft/>
            </div>
            <div className="text-center text-slate-500">
                {review.text}
            </div>
            <div className="text-violet-400 m-auto mt-2">
                <FaQuoteRight/>
            </div>
            
        </div>
    ); 
}

export default Card; 