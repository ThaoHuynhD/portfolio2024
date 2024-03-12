import React, { useState } from 'react'
import { headerTitle } from '../data/data'

export default function RightMenu({ isVietnamese }) {
    const [activeTitle, setActiveTitle] = useState(headerTitle[0].link);
    const handleTitleClick = (link) => {
        setActiveTitle(link);
    };
    return (
        <div>
            <ul className='fixed right-40 top-1/3 flex flex-col' id='mainNav'>
                {headerTitle.map((item, index) => {
                    const isActive = item.link === activeTitle;
                    return <li key={index}>
                        <a className={`menu-item p-2 w-36 cursor-pointer ${isActive ? 'active' : ''}`}
                            href={item.link}
                            onClick={() => handleTitleClick(item.link)}
                        >
                            {isVietnamese ? item.vntitle : item.title}</a>
                    </li>
                })}
            </ul>
            <div className='fixed right-40 top-2/3 -rotate-90'>
                <a className='p-2 w-36 cursor-pointer hover:text-amber-300'
                    href='#banner'
                    onClick={() => handleTitleClick('#banner')}
                >
                    {isVietnamese ? 'Về đầu trang' : 'Back to top'}
                    <i className="fa-solid fa-angles-right ml-2"></i></a>
            </div>
        </div>
    )
}
