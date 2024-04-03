import React, { useEffect, useState } from 'react'
import { headerTitle } from '../data/data'
import { useLanguage } from './LanguageContext';
import useScreenMode from './DarkMode';

export default function RightMenu() {
    const toggleScreenMode = useScreenMode();
    const { toggleLanguageMode } = useLanguage();
    const { isVietnamese } = useLanguage();
    const [activeTitle, setActiveTitle] = useState(headerTitle[0].link);
    let sections = document.querySelectorAll('section');

    const container = document.querySelector('#myBody');

    container.addEventListener('wheel', debounce(onScroll, 200));
    container.addEventListener('DOMMouseScroll', debounce(onScroll, 200));

    function debounce(func, delay) {
        let timeoutId;
        return function () {
            const context = this;
            const args = arguments;
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(context, args);
            }, delay);
        };
    }

    let index;
    function onScroll(e) {
        e = e || window.event;

        var delta = e.detail ? -e.detail : e.wheelDelta;

        if (delta > 0) {
            if (index > 0) {
                index--;
                setActiveTitle(headerTitle[index].link);
                sections.forEach((section) => {
                    section.classList.remove('animate__fadeInUp');
                    section.classList.add('animate__fadeInDown');
                })
            }
        } else if (index < (headerTitle.length - 1)) {
            index++;
            setActiveTitle(headerTitle[index].link);
            sections.forEach((section) => {
                section.classList.remove('animate__fadeInDown');
                section.classList.add('animate__fadeInUp');
            })
        }

        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }

    function scrollToSection(sectionId) {
        index = headerTitle.findIndex(item => item.link === sectionId);
        const section = document.querySelector(sectionId);
        section.classList.add('active');
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    useEffect(() => {
        sections = document.querySelectorAll('section');
        if (sections) {
            sections.forEach((section) => {
                section.classList.add('animate__animated');
                section.classList.remove('active');
            })
        }
    }, [activeTitle]);

    useEffect(() => {
        scrollToSection(activeTitle);
    }, [activeTitle]);

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
                                onClick={() => setActiveTitle(item.link)}>
                                {isVietnamese ? item.vntitle : item.title}</a>
                        </li>
                    })}
                </ul>
                <div className='-rotate-90 mb-20'>
                    <a className='p-2 w-36 cursor-pointer hover:text-amber-300'
                        onClick={() => setActiveTitle(headerTitle[0].link)} >
                        {isVietnamese ? 'Về đầu trang' : 'Back to top'}
                        <i className="fa-solid fa-angles-right ml-2"></i></a>
                </div>
            </div>
        </div>
    )
}
