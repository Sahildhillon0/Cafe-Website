import React, { useState } from 'react';

export default function CardCate(props) {
    const [Add, setAdd] = useState(0); // Initialize counter as a number
    const [showOperators, setShowOperators] = useState(false);

    const incrementCounter = () => {
        setAdd(prevCount => prevCount + 1); // Increment counter by 1 using previous count
    };

    const decrementCounter = () => {
        if (Add > 0) {
            setAdd(prevCount => prevCount - 1); // Decrement counter by 1 using previous count
        }
    };

    const showOperatorsHandler = () => {
        setShowOperators(true);
    };

    const hideOperatorsHandler = () => {
        setShowOperators(false);
    };

    return (
        <div>
            <div className='flex justify-center items-center w-[25.8rem] sm:w-[30rem] sm:h-56 h-48 mb-2 shadow-md bg-sky-100 overflow-hidden sm:flex sm:flex-col sm:justify-center rounded-xl mx-3 '>
                <p className='border-2 border-sky-100 sm:p-16 text-sky-100 p-14'>
                    ________
                </p>
                <img src={props.image} alt="" className='min-w-36 h-36 rounded-3xl sm:hidden relative left-44' />
                <p className='hidden sm:block'>
                    <img className='relative sm:w-36 sm:h-36 sm:rounded-3xl sm:left-36 sm:top-0' src={props.image} alt="" />
                </p>
                <div onClick={showOperatorsHandler}
                    className='relative flex cursor-pointer justify-between items-center min-w-20 sm:left-36 left-16 top-[4.5rem] sm:-top-4 bg-sky-50 p-1 sm:w-24 sm:px-4 px-6 text-black rounded-xl border-[3px] border-sky-300'>
                    <p className={`text-lg `} id='operator1' onClick={decrementCounter}>
                        -
                    </p>
                    <p className='text-lg'>
                        {Add}
                    </p>
                    <p className={`text-lg`} id='operator2' onClick={incrementCounter}>
                        +
                    </p>
                </div>
                <div className='relative sm:bottom-44 sm:right-24 right-72'>
                    <p className='text-2xl'>
                        {props.name}
                    </p>
                    <p className='text-2xl'>
                        ${props.price}/-
                    </p>
                    <p className='text-md text-gray-500 sm:w-60 w-48'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam fuga sit blanditiis!
                    </p>
                </div>
            </div>
        </div>
    )
}
