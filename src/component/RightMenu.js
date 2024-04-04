import React from 'react'
import { headerTitle } from '../data/data'
import { useLanguage } from './LanguageContext';
import useScreenMode from './DarkMode';
import { useDispatch, useSelector } from 'react-redux';
import { SET_ACTIVE_TITLE } from '../constant/constant';

export default function RightMenu() {

    const toggleScreenMode = useScreenMode();
    const { toggleLanguageMode, isVietnamese } = useLanguage();
    let activeTitle = useSelector(state => state.menuReducer.activeTitle);

    const dispatch = useDispatch();
    const handleBtnClick = (sectionId) => {
        dispatch({ type: SET_ACTIVE_TITLE, payload: sectionId });
    }

    return (
        <div className='menu'>
            <div className='fixed right-5 flex flex-col justify-between z-2000 min-h-screen'>
                <div className='flex mt-5'>
                    <button className='language-mode-toggle flex-center relative max-h-16 mr-5'
                        onClick={toggleLanguageMode}>
                        <img className='english-mode' src='./img/flagvn.png' alt='VNflag' />
                        <img className='vietnamese-mode' src='./img/flaguk.png' alt='UKflag' />
                    </button >
                    <button className='screen-mode-toggle flex-center w-12 rounded-full max-h-16'
                        onClick={toggleScreenMode}>
                        <img className='screen-light' src='./img/screensun.png' alt='sun' />
                        <img className='screen-dark' src='./img/screenmoon.png' alt='moon' />
                    </button >
                </div>
                <ul id='mainNav'>
                    {headerTitle.map((item, index) => {
                        const isActive = item.link === activeTitle;
                        return <li key={index}>
                            <a className={`menu-item p-2 w-24 cursor-pointer ${isActive ? 'active' : ''}`}
                                onClick={() => { handleBtnClick(item.link) }}
                            >
                                {isVietnamese ? item.vntitle : item.title}</a>
                        </li>
                    })}
                </ul>
                <div className='-rotate-90 mb-20'>
                    <a className='p-2 w-36 cursor-pointer hover:text-amber-300'
                        onClick={() => { handleBtnClick(headerTitle[0].link) }}
                    >
                        {isVietnamese ? 'Về đầu trang' : 'Back to top'}
                        <i className="fa-solid fa-angles-right ml-2"></i></a>
                </div>
            </div>
        </div>
    )
}
