import React from 'react'

export default function MyHeader() {
    return (
        <div className='fixed mt-0 top-0 left-0 w-screen z-2000'>
            <div className="lg:px-20 mx-auto">
                <div>
                    <img className='w-20 lg:w-auto logo-light' src='./img/h3twhite.png' alt='h3t' />
                    <img className='w-20 lg:w-auto logo-dark' src='./img/h3tblack.png' alt='h3t' />
                </div >
            </div>
        </div >
    )
}
