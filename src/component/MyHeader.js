import React from 'react'

export default function MyHeader({ toggleScreenMode, toggleLanguageMode, isVietnamese }) {
    return (
        <div className='fixed mt-0 top-0 left-0 w-screen z-50'>
            <div className="px-20 mx-auto ">
                <div className='flex my-5'>
                    <button className='grow' onClick={() => { }}>
                        <img className='logo-light' src='./img/h3twhite.png' alt='h3t' />
                        <img className='logo-dark' src='./img/h3tblack.png' alt='h3t' />
                    </button >
                    <div className='flex'>
                        <button className='screen-mode-toggle flex-center relative px-10'
                            onClick={toggleLanguageMode}
                        >
                            <img className='english-mode' src='./img/flagvn.png' alt='VNflag' />
                            <img className='vietnamese-mode' src='./img/flaguk.png' alt='UKflag' />
                        </button >
                        <button className='screen-mode-toggle flex-center w-12 rounded-full border-2' onClick={toggleScreenMode}>
                            <img className='screen-light' src='./img/screensun.png' alt='sun' />
                            <img className='screen-dark' src='./img/screenmoon.png' alt='moon' />
                        </button >
                    </div>
                </div>
            </div>
        </div >
    )
}