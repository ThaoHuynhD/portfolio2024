import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLanguage } from './LanguageContext';
import useScreenMode from './DarkMode';
import { headerTitle } from '../data/data'
import { SET_ACTIVE_TITLE } from '../constant/constant';

export default function RightMenu() {

    const toggleScreenMode = useScreenMode();
    const { toggleLanguageMode, isVietnamese } = useLanguage();

    let activeTitle = useSelector(state => state.menuReducer.activeTitle);
    const dispatch = useDispatch();

    const handleBtnClick = (sectionId) => {
        const sections = document.querySelectorAll('section');
        let oldIndex = headerTitle.findIndex(item => item.link === activeTitle);
        let newIndex = headerTitle.findIndex(item => item.link === sectionId);

        if (oldIndex > newIndex) {
            sections.forEach((section) => {
                section.classList.remove('animate__fadeInUp');
                section.classList.add('animate__fadeInDown');
            })
        } else {
            sections.forEach((section) => {
                section.classList.remove('animate__fadeInDown');
                section.classList.add('animate__fadeInUp');
            })
        }
        dispatch({ type: SET_ACTIVE_TITLE, payload: sectionId });
    }

    return (
        <div id='menu'>
            <div className='z-2000 fixed right-0 md:right-5 flex flex-col justify-between min-h-screen'>
                <div className='flex mt-5'>
                    <button className=' language-mode-toggle flex-center relative max-h-16 mr-1 md:mr-5'
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
                <ul id='mainNav' className='hidden md:block ml-auto'>
                    {headerTitle.map((item, index) => {
                        const isActive = item.link === activeTitle;
                        return <li key={index}>
                            <a className={`menu-item p-2 w-24 cursor-pointer ${isActive ? 'active' : ''}`}
                                onClick={() => { handleBtnClick(item.link) }}>
                                {isVietnamese ? item.vntitle : item.title}</a>
                        </li>
                    })}
                </ul>
                <div className='-rotate-90 md:mb-20 mb-5 relative -right-10'>
                    <a id='totop' className='cursor-pointer flex-center'
                        onClick={() => { handleBtnClick(headerTitle[0].link) }}>
                        <span className='hidden md:block'>{isVietnamese ? 'Về đầu trang' : 'Back to top'}</span>
                        <i className="fa-solid fa-angles-right"></i></a>
                </div>
            </div>
        </div>
    )
}
