import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { headerTitle } from '../data/data'
import { useLanguage } from './LanguageContext';
import { SET_ACTIVE_TITLE } from '../constant/constant';

export default function RightMenu() {
    const { isVietnamese } = useLanguage();
    let activeTitle = useSelector(state => state.menuReducer.activeTitle);
    const dispatch = useDispatch();

    const handleTitleClick = (link) => {
        dispatch({ type: SET_ACTIVE_TITLE, payload: { link } })
    };
    return (
        <div id='menu'>
            <ul className='fixed right-28 top-1/3 flex flex-col' id='mainNav'>
                {headerTitle.map((item, index) => {
                    const isActive = item.link === activeTitle;
                    return <li key={index}>
                        <a className={`menu-item p-2 w-20 cursor-pointer ${isActive ? 'active' : ''}`}
                            href={item.link}
                            onClick={() => handleTitleClick(item.link)}
                        >
                            {isVietnamese ? item.vntitle : item.title}</a>
                    </li>
                })}
            </ul>
            <div className='fixed right-24 top-2/3 -rotate-90'>
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
