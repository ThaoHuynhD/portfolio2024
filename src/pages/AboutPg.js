import React from 'react'
import { aboutDetail, aboutIntro } from '../data/data'
import { useLanguage } from '../component/LanguageContext';

export default function AboutPg() {
  const { isVietnamese } = useLanguage();
  return (
    <section id='intro'>
      <div class="section-container">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-5">
            <div className="picture-wrapper w-4/5 lg:w-auto m-auto rounded-xl">
              <img className='banner-img' src='./img/banner.jpg' alt='' />
            </div>
            <div className="mx-5 lg:m-auto content">
              <h1 className='text-center lg:text-left text-5xl lg:text-7xl'>{isVietnamese ? 'VỀ' : 'ABOUT'}
                <span className='text-5xl lg:text-7xl text-amber-500 font-extrabold'> {isVietnamese ? 'TÔI' : 'ME'}</span></h1>
              <p className='my-10'>{isVietnamese ? aboutIntro.vndata : aboutIntro.data}</p>
              {aboutDetail.map((item, index) => {
                return <div class="max-w-lg">
                  <ul key={index} className='grid grid-cols-3 lg:grid-cols-2 gap-5'>
                    <li>{isVietnamese ? item.vntitle : item.title}</li>
                    <li className='col-span-2 lg:col-auto'>{isVietnamese ? item.vndata : item.data}</li>
                  </ul>
                </div>
              })}
              <div class="text-center"><button className='orangeBtn mt-10' onClick={() => { }} >{isVietnamese ? 'TẢI CV CỦA TÔI' : 'DOWNLOAD MY CV'}</button></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
