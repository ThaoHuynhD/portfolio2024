import React, { useState } from 'react'
import { headerTitle } from '../data/data'
import { useLanguage } from './LanguageContext';

export default function RightMenu() {
    const { isVietnamese } = useLanguage();
    const [activeTitle, setActiveTitle] = useState(headerTitle[0].link);
    let index = headerTitle.findIndex(item => item.link === activeTitle);

    const handleTitleClick = (link) => {
        scrollToSection(link);
        setActiveTitle(link);
    };

    function scrollToSection(sectionId) {
        const section = document.querySelector(sectionId);
        if (section) {
            window.scrollTo({
                top: section.offsetTop,
                behavior: 'smooth'
            });
        }
    }

    var container = document.querySelector('#myBody');

    container.addEventListener('wheel', debounce(onScroll, 100));
    container.addEventListener('DOMMouseScroll', debounce(onScroll, 100));

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

    function onScroll(e) {
        e = e || window.event;

        var delta = e.detail ? -e.detail : e.wheelDelta;

        if (delta > 0) {
            if (index > 0) {
                index--;
                handleTitleClick(headerTitle[index].link)
            }
        } else {
            if (index < headerTitle.length - 1) {
                index++;
                handleTitleClick(headerTitle[index].link)
            }
        }
        e.preventDefault ? e.preventDefault() : (e.returnValue = false);
    }

    return (
        <div className='menu'>
            <div className='fixed right-20 top-1/3 flex flex-col'>
                <ul id='mainNav'>
                    {headerTitle.map((item, index) => {
                        const isActive = item.link === activeTitle;
                        return <li key={index}>
                            <a className={`menu-item p-2 w-24 cursor-pointer ${isActive ? 'active' : ''}`}
                                onClick={() => handleTitleClick(item.link)}
                            >
                                {isVietnamese ? item.vntitle : item.title}</a>
                        </li>
                    })}
                </ul>
                <div className='-rotate-90 mt-40'>
                    <a className='p-2 w-36 cursor-pointer hover:text-amber-300'
                        onClick={() => handleTitleClick(headerTitle[0].link)}
                    >
                        {isVietnamese ? 'Về đầu trang' : 'Back to top'}
                        <i className="fa-solid fa-angles-right ml-2"></i></a>
                </div>

            </div>
        </div>
    )
}
