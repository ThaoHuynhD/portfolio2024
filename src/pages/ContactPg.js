import React from 'react'
import { aboutDetail } from '../data/data'
import './Contact.scss'
import { useLanguage } from '../component/LanguageContext';

export default function ContactPg() {
  const { isVietnamese } = useLanguage();
  return (
    <section id='contact'>
      <div class="section-container">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2">
            <div>
              <h1 className='text-6xl lg:text-7xl text-amber-500 font-extrabold'> {isVietnamese ? 'Liên hệ làm việc ngay' : `Let's Work Together`}</h1>
              <button className='orangeBtn mt-10' onClick={() => { }} >{isVietnamese ? 'GỬI EMAIL NGAY' : 'SEND ME AN EMAIL'}</button>
            </div>
            <ul>
              {aboutDetail.map((item, index) => {
                return <li key={index}>
                  <div className=' min-w-9 orangeBtn flex-center'>
                    <i className={item.icon}></i>
                  </div>
                  <div className="info">
                    <p>{isVietnamese ? item.vntitle : item.title}</p>
                    <span className='lg:text-xl'>{isVietnamese ? item.vndata : item.data}</span>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </section >
  )
}
