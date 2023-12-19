'use client'
import React, {useState} from 'react'

const Gallery = () => {
    
  return (
    <section className='px-4 py-12'>
        <div className='grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 mx-auto max-w-screen-2xl'>
            <div 
            style={{height: "380px"}}
            className='bg-primary h-96'>
                1
            </div>
            <div className='bg-red-300 h-96'>
                2
            </div>
            <div className='bg-red-300'>
                2
            </div>
            <div className='bg-red-300'>
                2
            </div>
            <div className='bg-red-300'>
                2
            </div>
            <div className='bg-red-300 h-96'>
                2
            </div>
            <div className='bg-red-300'>
                2
            </div>
            <div className='bg-red-300'>
                2
            </div>
            <div className='bg-red-300'>
                2
            </div>

        </div>
    </section>
  )
}

export default Gallery