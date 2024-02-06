import React from "react";
import Card from "./Card"; 
import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";


function Testimonials(props){
    const reviews = props.reviews; 
    const n=reviews.length; 

    let [index, setIndex] = useState(0); 

    function leftShiftHandler(){
        const ind = (index-1+n)%n; 
        setIndex(ind);
    }

    function rightShiftHandler(){
        const i = (index+1)%n; 
        setIndex(i);
    }

    function randomShiftHandler(){
        const randomIndex = Math.floor(Math.random() * n); 
        setIndex(randomIndex); 
    }

    
    return  (
        <div className="w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 rounded-md transition-all duration-200 hover:shadow-xl ">
            <Card review={reviews[index]}/>

            <div className="flex gap-3 mt-10 font-bold text-3xl text-violet-400 mx-auto">
                <button className="cursor-pointer hover:text-violet-500" 
                        onClick={leftShiftHandler}>
                    <FiChevronLeft/>
                </button>
                <button className="cursor-pointer hover:text-violet-500"
                    onClick={rightShiftHandler}>
                    <FiChevronRight/>
                </button>
            </div>

            <div className="mt-6">
                <button className="text-lg text-white bg-violet-400 hover:bg-violet-500 cursor-pointer px-10 py-2 rounded-md transition-all duration-200"
                        onClick={randomShiftHandler}>
                    Surprise Me
                </button>
            </div>

        </div>
    );
}

export default Testimonials; 