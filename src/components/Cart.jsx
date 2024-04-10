import React from 'react'
import BestSellers from './BestSellers'
import image from '../images/test.jpg'

export default function Cart() {
    return (
        <div className='absolute top-16 sm:top-16'>
        <BestSellers image={image} title="Burger" />
        </div>
    )
}
