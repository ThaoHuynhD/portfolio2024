import React from 'react'
import { headerTitle } from '../data/data'

export default function RightMenu({ isVietnamese }) {
    return (
        <div className='fixed right-40 top-1/2 flex flex-col'>
            {headerTitle.map((item, index) => {
                return <a className='menu-item p-2 w-36 cursor-pointer'
                    key={index}
                    href={item.link}>
                    {isVietnamese ? item.vntitle : item.title}</a>
            })}
        </div>
    )
}
