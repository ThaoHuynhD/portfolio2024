import React from 'react'
import { projectDetail } from '../data/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useLanguage } from '../component/LanguageContext';
export default function ProjectPg() {
  const { isVietnamese } = useLanguage();
  return (
    <section id='project'>
      <div className="section-container">
        <div className="container">
          {isVietnamese ? (<div className="title">
            <h1 className='animate-charcter'>Dự án của chúng tôi</h1>
            <p>Tôi và đồng đội đã xây dựng nhiều dự án khác nhau để phù hợp với các nhu cầu khác nhau của khách hàng. Nếu bạn muốn xem thêm các ví dụ về công việc của tôi ngoài những dự án được giới thiệu trên trang web này, vui lòng liên hệ với tôi!</p>
            <button>Xem Dự Án</button>
          </div>) : (
            <div className="title">
              <h1 className='animate-charcter'>Previous Projects</h1>
              <p>I have built various different projects to fit different aspects of the client's business. If you want to see more examples of my work than the ones showcased in this site, please contact me!</p>
              <button>See Projects</button>
            </div>
          )}
          <Swiper
            pagination={{
              clickable: true,
            }}
            slidesPerView={1}
            autoplay
            scrollbar={{ draggable: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {projectDetail.map((item, index) => {
              return <SwiperSlide key={index}>
                <div className='grid grid-cols-5 h-800' >
                  <div className="col-span-2 item-content">
                    <h3 className='text-5xl text-amber-400 font-bold py-3' key={index}>{item.name} </h3>
                    <p className='py-6 align-sub min-h-56'>{isVietnamese ? item.vnintro : item.intro}</p>
                    <p className='flex gap-3'>
                      {item.techs.map((item, index) => <span key={index} className='tech-btn p-2 bg-slate-500 rounded-xl flex'>
                        {item}</span>)}
                    </p>
                    <p className="mt-5">
                      <a className={item.linkweb === '' ? 'hidden' : 'tech-btn w-48 py-2 px-4 border border-gray-400 rounded-2xl bg-black mr-5'}
                        href={item.linkweb}>
                        <span>
                          <i className="fa-solid fa-link pr-3"></i>
                          {isVietnamese ? 'Xem website' : 'View Website'}
                        </span>
                      </a>
                      <a className={item.linksource === '' ? 'hidden' : 'tech-btn w-48 py-2 px-4 border border-gray-400 rounded-2xl bg-black'}
                        href={item.linksource}>
                        <span>
                          <i className="fa-brands fa-github pr-3"></i>
                          {isVietnamese ? 'Xem Source' : 'View Source'}
                        </span>
                      </a>
                    </p>
                  </div>
                  <div className="col-span-3 ml-10">
                    <div className="picture-wrapper"><img className={item.img === '' ? 'hidden' : 'w-full'} src={item.img} alt={item.name} /></div>
                    <div className="video-wrapper">
                      <video className={item.video === '' ? 'hidden' : 'w-full'} controls>
                        <source src={item.video} type="video/mp4" />
                      </video>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            })}
          </Swiper>
        </div>
      </div>
    </section >
  )
}
