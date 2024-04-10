import React from 'react'
import CardCate from './CardCate'
import shake from '../images/shake1.jpg'

export default function CateShakes() {
    return (
        <>
            <div className=' absolute top-[120%] sm:top-[140%] bg-sky-100 flex flex-col justify-center items-center sm:flex sm:flex-row sm:flex-wrap'>
                <CardCate image={shake} name="Shake" price="3.99"/>
                <CardCate image={shake} name="Shake" price="2.99"/>
                <CardCate image={shake} name="Shake" price="3.99"/>
                <CardCate image={shake} name="Shake" price="3.99"/>
                <CardCate image={shake} name="Shake" price="3.99"/>
            </div>
        </>
    )
}
