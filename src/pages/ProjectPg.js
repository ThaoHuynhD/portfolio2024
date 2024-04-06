import React, { useRef, useState } from 'react'
import { projectDetail } from '../data/data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
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
              <h1 className='text-5xl 2xl:text-7xl animate-charcter'>Dự án của chúng tôi</h1>
              <p className=' 2xl:text-xl'>Chúng tôi đã xây dựng nhiều dự án khác nhau để phù hợp với nhu cầu đa dạng của khách hàng. <br />Nếu bạn muốn xem thêm các ví dụ về công việc của tôi ngoài những dự án được giới thiệu trên trang web này, vui lòng liên hệ với tôi!</p>
              <button className='text-xl hover:text-amber-400 mt-2 animate-bounce hover:animate-none font-bold transition-all'
                onClick={() => { handleBtnClick('https://github.com/ThaoHuynhD') }}
              >Xem Dự Án<i className="fa-solid fa-angles-right ml-1"></i></button>
            </div>) : (
            <div className="title">
              <h1 className='text-5xl 2xl:text-7xl animate-charcter'>Previous Projects</h1>
              <p className=' 2xl:text-xl'>I have built various different projects to fit various aspects of the client's business. <br />If you want to see more examples of my work than the ones showcased in this site, please contact me!</p>
              <button className='text-xl hover:text-amber-400 mt-2 animate-bounce hover:animate-none font-bold transition-all'
                onClick={() => { handleBtnClick('https://github.com/ThaoHuynhD') }}
              >See Projects<i className="fa-solid fa-angles-right ml-1"></i></button>
            </div>
          )}
          <div className="px-5 lg:mx-10">
            <Swiper
              loop={true}
              spaceBetween={10}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              autoplay={{
                delay: 4000,
                disableOnInteraction: true,
              }}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[Autoplay, FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {projectDetail.map((item, index) => {
                return <SwiperSlide key={index}>
                  <div className='grid grid-cols-1 lg:grid-cols-7 lg:gap-5 2xl:grid-cols-5 h-700 2xl:h-550 lg:h-350 2xl:mb-2' >
                    <div className=" lg:col-span-4 2xl:col-span-2 item-content">
                      <h3 className='text-3xl 2xl:text-5xl text-amber-400 font-bold 2xl:py-3' key={index}>{item.name} </h3>
                      <p className='py-6 lg:py-3 xl:py-6 align-sub min-h-32 lg:min-h-40 2xl:min-h-56'>{isVietnamese ? item.vnintro : item.intro}</p>
                      <p className='flex gap-3'>
                        {item.techs.map((item, index) => <span key={index}
                          className='tech-btn p-2 rounded-xl flex'>
                          {item}</span>)}
                      </p>
                      <p className="my-5 flex">
                        <button className={item.linkweb === '' ? 'hidden' : 'link-btn w-48 py-2 px-4 rounded-2xl mr-5'}
                          onClick={() => { handleBtnClick(item.linkweb) }}>
                          <span>
                            <i className="fa-solid fa-link pr-3"></i>
                            {isVietnamese ? 'Xem website' : 'View Website'}
                          </span>
                        </button>
                        <button className={item.linksource === '' ? 'hidden' : 'link-btn w-48 py-2 px-4 rounded-2xl'}
                          onClick={() => { handleBtnClick(item.linksource) }}>
                          <span>
                            <i className="fa-brands fa-github pr-3"></i>
                            {isVietnamese ? 'Xem Source' : 'View Source'}
                          </span>
                        </button>
                      </p>
                    </div>
                    <div className=" flex-center lg:col-span-3 2xl:col-span-3 md:mx-10 lg:mx-0 xl:mx-10 xl:my-0">
                      <div className={item.img === '' ? 'hidden' :
                        'picture-wrapper flex m-autojustify-start'}>
                        <img className={item.img === '' ? 'hidden' : ''} src={item.img} alt={item.name} />
                      </div>
                      <div className={item.video === '' ? 'hidden' : "video-wrapper flex-center m-auto"}>
                        <video className={item.video === '' ? 'hidden' : ''} controls autoPlay muted>
                          <source src={item.video} type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              })}
            </Swiper>
          </div>
          <div className="flex justify-between mx-20">
            <button ref={navigationPrevRef} className='navBtn p-2 my-4 lg:my-2 xl:my-4'><i className="fa-solid fa-arrow-left pr-2"></i>Prev</button>
            <button ref={navigationNextRef} className='navBtn p-2 my-4 lg:my-2 xl:my-4'>Next<i className="fa-solid fa-arrow-right pl-2"></i></button>
          </div>
          <div className="hidden xl:block lg:mx-10">
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
                      <div className="picture-wrapper m-auto max-h-16 2xl:max-h-36">
                        <img className={item.img === '' ? 'hidden' : ''} src={item.img} alt={item.name} />
                      </div>
                      <div className=" max-h-16 2xl:max-h-36">
                        <video className={item.video === '' ? 'hidden' : ''}>
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
