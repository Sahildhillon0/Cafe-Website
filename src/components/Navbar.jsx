import React from 'react'
import { Link } from 'react-router-dom';


function clicked(a) {
    for (let index = 1; index < 5; index++) {
        if (index === a) {
            document.getElementById(`nav${index}`).classList.add('text-[#638FFF]');
            document.getElementById(`nav${index}`).classList.add('border-[#638FFF]');
        }
        else {
            document.getElementById(`nav${index}`).classList.remove('text-[#638FFF]');
            document.getElementById(`nav${index}`).classList.remove('border-[#638FFF]');
        }
    }
}

let checked = true;

function showed() {
    console.log(checked);
    if (checked === false) {
        checked = true;
        document.getElementById(`show1`).classList.add('hidden');
        document.getElementById(`show2`).classList.add('hidden');
        document.getElementById(`show3`).classList.add('hidden');
    } else {
        checked = false;
        document.getElementById(`show1`).classList.remove('hidden');
        document.getElementById(`show2`).classList.remove('hidden');
        document.getElementById(`show3`).classList.remove('hidden');
    }
}


export default function Navbar() {
    return (
        <div className=''>
            <div className=' h-22 sm:fixed m-0 px-8 py-2 flex items-center justify-between border-2 bg-[#0b171b] text-white z-10 w-full sm:bottom-auto bottom-0 border-[#0b171b] fixed'>
                <div className='bg-sky-900 border-2 border-sky-800 shadow-inner shadow-sky-300 hover:rotate-[360deg] duration-300 sm:hidden rounded-full w-16 flex justify-center items-center h-16'>
                    <Link to="/home">
                        <svg className='w-12 h-20' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="home">
                            <path fill="#638FFF" d="M21.66,10.25l-9-8a1,1,0,0,0-1.32,0l-9,8a1,1,0,0,0-.27,1.11A1,1,0,0,0,3,12H4v9a1,1,0,0,0,1,1H19a1,1,0,0,0,1-1V12h1a1,1,0,0,0,.93-.64A1,1,0,0,0,21.66,10.25ZM13,20H11V17a1,1,0,0,1,2,0Zm5,0H15V17a3,3,0,0,0-6,0v3H6V12H18ZM5.63,10,12,4.34,18.37,10Z">
                            </path>
                        </svg>
                    </Link>
                </div>
                <Link to="/">
                    <div className='bg-sky-300 z-20 hidden sm:block h-36 w-36 flex-col items-center justify-center absolute right-0 left-0 mx-auto sm:mx-0 bottom-1 rounded-full sm:static sm:h-12 sm:rounded-none sm:bg-[#0b171b]'>
                        <h1 className='font-bold text-3xl text-center font-serif'>
                            HR12
                        </h1>
                        <p className='pl-2 -mt-2 hidden sm:block font-serif'>
                            ---Food store---
                        </p>
                    </div>
                </Link>

                {/* mobile nav */}
                <div onClick={() => showed()} className='bg-sky-600 shadow-inner shadow-sky-100 border-2 border-sky-700 hover:bg-sky-700 sm:hidden z-20 h-28 w-28 flex flex-col items-center justify-center absolute right-0 left-0 mx-auto sm:mx-0 bottom-1 rounded-full sm:static sm:h-12 sm:rounded-none sm:bg-[#0b171b]'>
                    <h1 className='font-bold text-3xl text-center'>
                        HR12
                    </h1>
                    <p className='pl-2 -mt-2 hidden sm:block'>
                        ---Food store---
                    </p>
                </div>

                {/* <div className='absolute'>

                <div id='show1' className='bg-sky-600 shadow-inner shadow-sky-100 border-2 border-sky-700 hover:bg-sky-700 relative bottom-11 right-10 justify-center rounded-full  w-16 h-16 mx-24 sm:hidden hidden'>
                    <p className='flex justify-center items-center pt-3'>
                        <svg className='w-10' xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="book">
                            <path fill="#FFF" d="M15,6H9A1,1,0,0,0,8,7v4a1,1,0,0,0,1,1h6a1,1,0,0,0,1-1V7A1,1,0,0,0,15,6Zm-1,4H10V8h4Zm3-8H5A1,1,0,0,0,4,3V21a1,1,0,0,0,1,1H17a3,3,0,0,0,3-3V5A3,3,0,0,0,17,2Zm1,17a1,1,0,0,1-1,1H6V4H17a1,1,0,0,1,1,1Z">
                            </path>
                        </svg>
                    </p>
                </div>
                <div id='show2' className='bg-sky-600 shadow-inner shadow-sky-100 border-2 border-sky-700 hover:bg-sky-700 relative bottom-40 right-[11.5rem] justify-center rounded-full  w-16 h-16 mx-auto sm:hidden hidden'>
                    <p className='flex justify-center items-center pt-3'>
                        <svg className='w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="favorite">
                            <path fill="#FFF" d="M22,9.67A1,1,0,0,0,21.14,9l-5.69-.83L12.9,3a1,1,0,0,0-1.8,0L8.55,8.16,2.86,9a1,1,0,0,0-.81.68,1,1,0,0,0,.25,1l4.13,4-1,5.68A1,1,0,0,0,6.9,21.44L12,18.77l5.1,2.67a.93.93,0,0,0,.46.12,1,1,0,0,0,.59-.19,1,1,0,0,0,.4-1l-1-5.68,4.13-4A1,1,0,0,0,22,9.67Zm-6.15,4a1,1,0,0,0-.29.88l.72,4.2-3.76-2a1.06,1.06,0,0,0-.94,0l-3.76,2,.72-4.2a1,1,0,0,0-.29-.88l-3-3,4.21-.61a1,1,0,0,0,.76-.55L12,5.7l1.88,3.82a1,1,0,0,0,.76.55l4.21.61Z">
                            </path>
                        </svg>
                    </p>
                </div>
                <div id='show3' className='bg-sky-600 shadow-inner shadow-sky-100 border-2 border-sky-700 hover:bg-sky-700 relative bottom-[10.8rem] right-24 justify-center rounded-full  w-16 h-16 mx-[21rem] sm:hidden hidden'>
                    <p className='flex justify-center items-center pt-3'>
                        <svg className='w-10' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="user">
                            <path fill="#FFF" d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z">
                            </path>
                        </svg>
                    </p>
                </div>
                </div> */}

                <div className='hidden sm:flex'>
                    <ul className='gap-12 hidden sm:flex sm:gap-4 md:gap-10'>
                        <Link to="/home"><li id='nav1' onClick={() => clicked(1)} className='hover:text-[#638FFF] cursor-pointer hover:border-b-2 border-b-2 border-[#0b171b] text-lg hover:-translate-y-1 duration-300'>Home</li></Link>
                        <Link to="/shop"><li id='nav2' onClick={() => clicked(2)} className='hover:text-[#638FFF] cursor-pointer hover:border-b-2 border-b-2 border-[#0b171b] text-lg hover:-translate-y-1 duration-300'>Shop</li></Link>
                        <Link to="/"><li id='nav3' onClick={() => clicked(3)} className='hover:text-[#638FFF] cursor-pointer hover:border-b-2 border-b-2 border-[#0b171b] text-lg hover:-translate-y-1 duration-300'>Menu</li></Link>
                        <Link to="/"><li id='nav4' onClick={() => clicked(4)} className='hover:text-[#638FFF] cursor-pointer hover:border-b-2 border-b-2 border-[#0b171b] text-lg hover:-translate-y-1 duration-300'>Contact Us</li></Link>
                    </ul>
                </div>
                <div className='bg-sky-900 border-2 border-sky-800 shadow-inner shadow-sky-300 rounded-full w-16 flex justify-center items-center h-16 sm:w-12 sm:h-12 hover:rotate-[360deg] duration-300'>
                    <Link to="/cart">
                        <svg className='w-12 h-20 sm:w-8' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" id="shopping-cart-alt">
                            <path fill="#638FFF" d="M21.5,15a3,3,0,0,0-1.9-2.78l1.87-7a1,1,0,0,0-.18-.87A1,1,0,0,0,20.5,4H6.8L6.47,2.74A1,1,0,0,0,5.5,2h-2V4H4.73l2.48,9.26a1,1,0,0,0,1,.74H18.5a1,1,0,0,1,0,2H5.5a1,1,0,0,0,0,2H6.68a3,3,0,1,0,5.64,0h2.36a3,3,0,1,0,5.82,1,2.94,2.94,0,0,0-.4-1.47A3,3,0,0,0,21.5,15Zm-3.91-3H9L7.34,6H19.2ZM9.5,20a1,1,0,1,1,1-1A1,1,0,0,1,9.5,20Zm8,0a1,1,0,1,1,1-1A1,1,0,0,1,17.5,20Z">
                            </path>
                        </svg>
                    </Link>
                </div>
            </div>
        </div >
    )
}
