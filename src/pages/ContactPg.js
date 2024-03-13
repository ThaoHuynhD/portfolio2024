import React from 'react'
import { aboutDetail } from '../data/data'
import './Contact.scss'
import { useLanguage } from '../component/LanguageContext';

export default function ContactPg() {
  const { isVietnamese } = useLanguage();
  return (
    <section id='contact'>
      <div className="container relative top-1/3">
        <div className="grid">
          <div>
            <h1 className='text-7xl text-amber-500 font-extrabold'> {isVietnamese ? 'Liên hệ làm việc ngay' : `Let's Work Together`}</h1>
            <button className='orangeBtn mt-10' onClick={() => { }} >{isVietnamese ? 'GỬI EMAIL NGAY' : 'SEND ME AN EMAIL'}</button>
          </div>
          <ul>
            {aboutDetail.map((item, index) => {
              return <li key={index}>
                <div className='orangeBtn flex-center '>
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="info">
                  <p>{isVietnamese ? item.vntitle : item.title}</p>
                  <span>{isVietnamese ? item.vndata : item.data}</span>
                </div>
              </li>
            })}
          </ul>
        </div>
      </div>
    </section >
  )
}
