/* eslint-disable no-unused-vars */
import React from 'react';
import images from '../images/test.jpg';
import BestSellers from './BestSellers'
import Categories from './Categories';
import pizza from '../images/pizza-removebg-preview.png'
import burger from '../images/burger.jpg'
import shakes from '../images/shakes.jpg'
import CateNav from './CateNav';


export default function Home() {
    const arr=["" , "" , ""] ;
    return (
        <div className='z-0 absolute top-16 sm:top-16 w-full bg-sky-100'>
            <div className='w-full h-96'>
                <img className='w-full h-full' src={images} alt="oh" />
            </div>
            <div>
                <p className='text-gray-500 font-semibold bg-sky-100 text-center my-4'>
                ------------------------Best Sellers-----------------------
                </p>
                <ul className='flex overflow-x-auto sm:gap-3 gap-2 h-[9.6rem] scroll-smooth items-center'>
                    <BestSellers image={images} title="Best Sellers" />
                    <BestSellers image={images} title="Best Sellers" />
                    <BestSellers image={images} title="Best Sellers" />
                    <BestSellers image={images} title="Best Sellers" />
                    <BestSellers image={images} title="Best Sellers" />
                </ul>
                <p className='text-gray-500 font-semibold bg-sky-100 text-center my-4 '>
                ------------------------Categories------------------------
                </p>
                <ul className='flex gap-2 overflow-x-auto bg-sky-100 h-[21rem] '>
                <CateNav/>
                </ul>
            </div>
        </div>
    )
}
