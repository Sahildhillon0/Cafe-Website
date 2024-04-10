/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from 'react';

export default function BestSellers(props) {
    const containerStyle = {
        backgroundImage: `url(${props.image})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    };

    return (
        <div className='flex items-center justify-center h-[8.4rem] border-2 border-sky-300 rounded-2xl w-[16rem] shadow-sm shadow-gray-900 top-5 hover:border-white hover:scale-105 duration-200 p-1'>
            <div id='bestsellers' className='bg-white h-[7.8rem] w-[7.9rem] rounded-2xl' style={containerStyle}></div>
            <p className='bg-sky-100 h-[8rem] w-[8rem] rounded-tr-3xl rounded-br-3xl flex items-center justify-center'>{props.title}</p>
        </div>
    );
}
