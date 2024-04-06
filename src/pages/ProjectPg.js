import React, { useRef, useState } from 'react'
import { projectDetail } from '../data/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import './ProjectPg.scss';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { useLanguage } from '../component/LanguageContext';
export default function ProjectPg() {
  const { isVietnamese } = useLanguage();
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const navigationNextRef = useRef(null);
  const navigationPrevRef = useRef(null);

  const handleBtnClick = (link) => {
    window.open(link, '_blank')
  }
  return (
    <section id='project'>
      <div className="section-container">
        <div className="container">
          {isVietnamese ? (
            <div className="title">
              <h1 className='text-5xl lg:text-7xl animate-charcter'>Dự án của chúng tôi</h1>
              <p>Tôi và đồng đội đã xây dựng nhiều dự án khác nhau để phù hợp với các nhu cầu khác nhau của khách hàng. Nếu bạn muốn xem thêm các ví dụ về công việc của tôi ngoài những dự án được giới thiệu trên trang web này, vui lòng liên hệ với tôi!</p>
              <button className=' hover:text-amber-400 mt-2 animate-bounce hover:animate-none '
                onClick={() => { handleBtnClick('https://github.com/ThaoHuynhD') }}
              >Xem Dự Án<i className="fa-solid fa-angles-right ml-1"></i></button>
            </div>) : (
            <div className="title">
              <h1 className='text-5xl lg:text-7xl animate-charcter'>Previous Projects</h1>
              <p>I have built various different projects to fit various aspects of the client's business. If you want to see more examples of my work than the ones showcased in this site, please contact me!</p>
              <button className=' hover:text-amber-400 mt-2 animate-bounce hover:animate-none '
                onClick={() => { handleBtnClick('https://github.com/ThaoHuynhD') }}
              >See Projects<i className="fa-solid fa-angles-right ml-1"></i></button>
            </div>
          )}
          <div className="px-5">
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {projectDetail.map((item, index) => {
                return <SwiperSlide key={index}>
                  <div className='grid grid-cols-1 lg:grid-cols-5 lg:h-550' >
                    <div className="lg:col-span-2 item-content">
                      <h3 className='text-3xl lg:text-5xl text-amber-400 font-bold lg:py-3' key={index}>{item.name} </h3>
                      <p className='py-6 align-sub min-h-32 lg:min-h-56'>{isVietnamese ? item.vnintro : item.intro}</p>
                      <p className='flex gap-3'>
                        {item.techs.map((item, index) => <span key={index}
                          className='tech-btn p-2 bg-slate-500 rounded-xl flex'>
                          {item}</span>)}
                      </p>
                      <p className="mt-5">
                        <button className={item.linkweb === '' ? 'hidden' : 'tech-btn w-48 py-2 px-4 border border-gray-400 rounded-2xl bg-black mr-5'}
                          onClick={() => { handleBtnClick(item.linkweb) }}>
                          <span>
                            <i className="fa-solid fa-link pr-3"></i>
                            {isVietnamese ? 'Xem website' : 'View Website'}
                          </span>
                        </button>
                        <button className={item.linksource === '' ? 'hidden' : 'tech-btn w-48 py-2 px-4 border border-gray-400 rounded-2xl bg-black'}
                          onClick={() => { handleBtnClick(item.linksource) }}>
                          <span>
                            <i className="fa-brands fa-github pr-3"></i>
                            {isVietnamese ? 'Xem Source' : 'View Source'}
                          </span>
                        </button>
                      </p>
                    </div>
                    <div className="lg:col-span-3 lg:ml-10 my-10 lg:mt-0">
                      <div className={item.img === '' ? 'hidden' : 'picture-wrapper m-auto max-h-48 lg:max-h-max lg:h-500'}>
                        <img className={item.img === '' ? 'hidden' : 'lg:w-full w-4/5'} src={item.img} alt={item.name} />
                      </div>
                      <div className="video-wrapper flex-center m-auto max-h-48 lg:max-h-max lg:h-500">
                        <video className={item.video === '' ? 'hidden' : 'lg:w-full w-4/5'} controls autoPlay muted>
                          <source src={item.video} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              })}
            </Swiper>
          </div>
          <div className="flex justify-between">
            <button ref={navigationPrevRef} className='navBtn left-btn p-2 mb-10'><i className="fa-solid fa-arrow-left pr-2"></i>Prev</button>
            <button ref={navigationNextRef} className='navBtn right-btn p-2 mb-10'>Next<i className="fa-solid fa-arrow-right pl-2"></i></button>
          </div>
          <div className="hidden lg:block">
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={0}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {projectDetail.map((item, index) => {
                return <SwiperSlide key={index}>
                  <div className='h-20 overflow-hidden cursor-pointer' >
                    <div>
                      <div className="picture-wrapper m-auto max-h-16 lg:max-h-36">
                        <img className={item.img === '' ? 'hidden' : 'w-4/5'} src={item.img} alt={item.name} />
                      </div>
                      <div className=" max-h-16 lg:max-h-36">
                        <video className={item.video === '' ? 'hidden' : 'w-full'}>
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
      </div>
    </section >
  )
}
