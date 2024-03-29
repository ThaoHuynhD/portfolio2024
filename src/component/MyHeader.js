import React from 'react'
import { useLanguage } from './LanguageContext';
import useScreenMode from './DarkMode';

export default function MyHeader() {
    const toggleScreenMode = useScreenMode();
    const { toggleLanguageMode } = useLanguage();
    return (
        <div className='fixed mt-0 top-0 left-0 w-screen  z-2000'>
            <div className="lg:px-20 mx-auto ">
                <div className='flex justify-between my-5'>
                    <button>
                        <img className='w-20 lg:w-auto logo-light' src='./img/h3twhite.png' alt='h3t' />
                        <img className='w-20 lg:w-auto logo-dark' src='./img/h3tblack.png' alt='h3t' />
                    </button >
                    <div className='flex'>
                        <button className='language-mode-toggle flex-center relative lg:px-10'
                            onClick={toggleLanguageMode}>
                            <img className='english-mode' src='./img/flagvn.png' alt='VNflag' />
                            <img className='vietnamese-mode' src='./img/flaguk.png' alt='UKflag' />
                        </button >
                        <button className='screen-mode-toggle flex-center w-12 rounded-full'
                            onClick={toggleScreenMode}>
                            <img className='screen-light' src='./img/screensun.png' alt='sun' />
                            <img className='screen-dark' src='./img/screenmoon.png' alt='moon' />
                        </button >
                    </div>
                </div>
            </div>
        </div >
    )
}
