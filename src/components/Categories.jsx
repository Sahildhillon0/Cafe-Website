import React from 'react';

export default function Categories(props) {
    const containerStyle = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };
    return (
        <>
        <div className='flex flex-col items-center justify-center h-[15.4rem]  rounded-2xl w-[16rem] shadow-md top-5 hover:border-white hover:scale-105 duration-200 p-1'>
            <div id='bestsellers' className='bg-transparent h-[14.8rem] w-[7.9rem] rounded-2xl' style={containerStyle}></div>
            <p className='bg-sky-100 h-[8rem] w-[8rem] flex items-center justify-center text-2xl border-t-2 border-gray-400'>{props.title}</p>
        </div>
        </>
    )
}
