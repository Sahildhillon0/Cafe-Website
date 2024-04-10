import React from 'react'
import pizza from '../images/pizza-removebg-preview.png'
import burger from '../images/burger.jpg'
import shakes from '../images/shakes.jpg'
import { Link } from 'react-router-dom'
import Categories from './Categories';

export default function CateNav() {
    return (
        <>
            {/* <ul className='flex overflow-x-auto mb-20 gap-1 sm:justify-center bg-sky-100'>
            <Link to="/pizza"><li className='border-2 border-sky-300 px-[3.35rem] text-2xl bg-sky-800 text-white py-2 hover:bg-sky-900 hover:border-sky-300 duration-300 shadow-inner shadow-sky-300 rounded-3xl'>Pizza</li></Link>
            <Link to="/burger"><li className='border-2 border-sky-300 px-[3.35rem] text-2xl bg-sky-800 text-white py-2 hover:bg-sky-900 hover:border-sky-300 duration-300 shadow-inner shadow-sky-300 rounded-3xl'>Burger</li></Link>
            <Link to="/shakes"><li className='border-2 border-sky-300 px-[3.35rem] text-2xl bg-sky-800 text-white py-2 hover:bg-sky-900 hover:border-sky-300 duration-300 shadow-inner shadow-sky-300 rounded-3xl'>Shakes</li></Link>
        </ul> */}
            <ul className='flex gap-2 overflow-x-auto my-8 bg-sky-100 h-[17rem] '>
                <Link to="/pizza"><Categories image={pizza} title="Pizza" /></Link>
                <Link to="/burger"><Categories image={burger} title="Burger" /></Link>
                <Link to="/shakes"><Categories image={shakes} title="Shakes" /></Link>
                <Link to="/pizza"><Categories image={pizza} title="Pizza" /></Link>
                <Link to="/burger"><Categories image={burger} title="Burger" /></Link>
            </ul>
        </>
    )
}
