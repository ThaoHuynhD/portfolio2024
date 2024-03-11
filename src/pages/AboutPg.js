import React from 'react'
import { aboutDetail, aboutIntro } from '../data/data'

export default function AboutPg({ isVietnamese }) {
  return (
    <section id='intro'>
      <div className="container relative">
        <div className="grid grid-cols-2 gap-5">
          <div className="picture-wrapper">
            <img className='banner-img' src='./img/banner.jpg' alt='' />
          </div>
          <div className="content">
            <h1 className='text-7xl'>ABOUT
              <span className='text-7xl text-amber-500 font-extrabold'> ME</span></h1>
            <p className='my-10'>{isVietnamese ? aboutIntro.vndata : aboutIntro.data}</p>
            {aboutDetail.map((item, index) => {
              return <ul key={index} className='grid grid-cols-2 gap-5'>
                <li>{isVietnamese ? item.vntitle : item.title}</li>
                <li>{isVietnamese ? item.vndata : item.data}</li>
              </ul>
            })}
            <button className='orangeBtn mt-10' onClick={() => { }} >DOWNLOAD MY CV</button>
          </div>
        </div>
      </div>
    </section>
  )
}
