import React from 'react'
import CardCate from './CardCate'
import pineapple from '../images/PineapplePizza.jpg'

export default function CatePizza() {
    return (
        <>
            <div className=' absolute top-[120%] sm:top-[140%] bg-sky-100 flex flex-col justify-center items-center sm:flex sm:flex-row sm:flex-wrap'>
                <CardCate image={pineapple} name="Pineapple Pizza" price="3.99"/>
                <CardCate image={pineapple} name="Pineapple Pizza" price="3.99"/>
                <CardCate image={pineapple} name="Pineapple Pizza" price="3.99"/>
                <CardCate image={pineapple} name="Pineapple Pizza" price="3.99"/>
                <CardCate image={pineapple} name="Pineapple Pizza" price="3.99"/>
                <CardCate image={pineapple} name="Pineapple Pizza" price="3.99"/>
                <CardCate image={pineapple} name="Pineapple Pizza" price="3.99"/>
                <CardCate image={pineapple} name="Pineapple Pizza" price="3.99"/>
                <CardCate image={pineapple} name="Pineapple Pizza" price="3.99"/>
            </div>
        </>
    )
}
