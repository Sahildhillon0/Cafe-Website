import React from 'react'
import CardCate from './CardCate'
import burger from '../images/Burger1.jpg'

export default function CatePizza() {
    return (
        <>
            <div className=' absolute top-[85%] sm:top-[140%] bg-sky-100 flex flex-col justify-center items-center sm:flex sm:flex-row sm:flex-wrap'>
                <CardCate image={burger} name="Burger" price="3.99"/>
                <CardCate image={burger} name="Burger" price="2.99"/>
                <CardCate image={burger} name="Burger" price="3.99"/>
                <CardCate image={burger} name="Burger" price="3.99"/>
                <CardCate image={burger} name="Burger" price="3.99"/>
            </div>
        </>
    )
}
