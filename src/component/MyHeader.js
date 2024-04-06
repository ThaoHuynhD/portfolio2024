import React from 'react'

export default function MyHeader() {
    return (
        <div className='fixed mt-0 top-5 left-10 w-screen z-2000'>
            <div className="lg:px-10 mx-auto">
                <div>
                    <img className='w-20 2xl:w-auto logo-light' src='./img/h3twhite.png' alt='h3t' />
                    <img className='w-20 2xl:w-auto logo-dark' src='./img/h3tblack.png' alt='h3t' />
                </div >
            </div>
        </div >
    )
}
