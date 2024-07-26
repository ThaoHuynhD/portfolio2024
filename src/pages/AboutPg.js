import React from 'react'
import { aboutDetail, aboutIntro } from '../data/data'
import { useLanguage } from '../component/LanguageContext';

export default function AboutPg() {
  const { isVietnamese } = useLanguage();

  const handleBtnClick = () => {
    window.open('https://drive.google.com/drive/folders/1-CJLAcX4-LfCHzUPDczUvKfwycxFvJJ-?usp=sharing', '_blank')
  }
  return (
    <section id='intro'>
      <div className="section-container">
        <div className="container">
          <div className="grid lg:gap-5 lg:mr-12  xl:gap-0 lg:grid-cols-3 2xl:mr-0 2xl:grid-cols-2">
            <div className="picture-wrapper w-4/5 lg:w-full xl:w-4/5 m-auto rounded-xl">
              <img className='banner-img' src='./img/banner.jpg' alt='' />
            </div>
            <div className=' lg:col-span-2 2xl:col-auto mx-5 lg:m-auto content '>
              <h1 className='text-center mt-10 lg:mt-0 lg:text-left text-5xl 2xl:text-7xl
              animate__animated animate__fadeInRightBig
              '>{isVietnamese ? 'Về' : 'About'}
                <span className='text-5xl 2xl:text-7xl text-amber-500 font-bold animate__animated animate__fadeInRightBig'> {isVietnamese ? 'TÔI' : 'ME'}</span></h1>
              <p className=' text-justify lg:text-left mx-5 lg:mx-0 xl:mr-10 my-5 2xl:my-10 2xl:mr-0 
              animate__animated animate__fadeInRight animate__delay-1s'
              >{isVietnamese ? aboutIntro.vndata : aboutIntro.data}</p>
              {aboutDetail.map((item, index) => {
                return <div key={index} className="max-w-lg">
                  <ul className='mx-16 lg:mx-0 grid grid-cols-3 lg:grid-cols-2 gap-5 
                  animate__animated animate__fadeInRight animate__delay-1s'>
                    <li>{isVietnamese ? item.vntitle : item.title}</li>
                    <li className='col-span-2 lg:col-auto'>{isVietnamese ? item.vndata : item.data}</li>
                  </ul>
                </div>
              })}
              <div className="text-center">
                <button id='openCV' className='orangeBtn mt-10 animate__animated animate__bounceIn animate__delay-2s'
                  onClick={() => { handleBtnClick() }}
                >{isVietnamese ? 'TẢI CV CỦA TÔI' : 'DOWNLOAD MY CV'}</button></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
