import React from 'react'
import { useLanguage } from '../component/LanguageContext';
import { bannerImg, headerTitle } from '../data/data';
import { useDispatch } from 'react-redux';
import { SET_ACTIVE_TITLE } from '../constant/constant';

export default function BannerPg() {
  const { isVietnamese } = useLanguage();

  const dispatch = useDispatch();
  const handleBtnClick = (link) => {
    dispatch({ type: SET_ACTIVE_TITLE, payload: link });
  }

  return (
    <section id='banner'>
      <div className="section-container">
        <div className="container">
          <div className="pt-20 grid lg:grid-cols-2">
            {isVietnamese ?
              <div className="my-auto xl:pr-10">
                <h1 className='text-3xl 2xl:text-6xl'>Xin chào, tôi là</h1>
                <h1 className='max-w-fit typewriter text-4xl lg:text-5xl 2xl:text-6xl mt-4 text-amber-500 font-extrabold'> THẢO HUỲNH</h1>
                <h1 className='animate__animated animate__fadeInLeft animate__delay-2s py-3 xl:py-4 text-2xl xl:text-3xl font-extrabold'> LẬP TRÌNH VIÊN TRANG WEB</h1>
                <p className='animate__animated animate__fadeInLeft animate__delay-3s py-3 xl:py-5'>+ Với khả năng phân tích và sáng tạo mạnh mẽ, tôi xuất sắc trong việc thực hiện các công việc được đề ra khi làm việc độc lập và khi là một đồng đội của nhóm.<br /> + Tôi là một người chú trọng vào chi tiết, có tư duy sắp xếp mọi việc gọn gàng và có khả năng hoàn thiện công việc một cách chất lượng.<br /> + Tôi tự tin rằng bản thân được trang bị tốt về kiến thức cũng như tinh thần làm việc cầu thị để đóng góp một cách hiệu quả vào các dự án và đạt được thành công trong lĩnh vực.</p>
                <div className="text-center mt-5">
                  <button className='animate__animated animate__fadeInLeft animate__delay-4s orangeBtn mb-5'
                    onClick={() => handleBtnClick(headerTitle[1].link)}
                  > Xem thêm về tôi</button>
                </div>
              </div>
              :
              <div className="my-auto lg:pr-10">
                <h1 className='text-3xl 2xl:text-6xl'>Hi, I'm</h1>
                <h1 className='typewriter text-4xl lg:text-5xl 2xl:text-6xl mt-4 text-amber-500 font-extrabold'> THẢO HUỲNH</h1>
                <h1 className='animate__animated animate__fadeInLeft animate__delay-2s py-3 lg:py-4 text-2xl xl:text-3xl font-extrabold'> A FULLSTACK WEBSITE DEVELOPER</h1>
                <p className='animate__animated animate__fadeInLeft animate__delay-3s py-3 lg:py-5'>With strong analytical and creative skills, I excel in tasks whether working independently or as part of a team. I am a detail-oriented individual who is organized and able to deliver quality work consistently. With a keen eye for detail and a collaborative mindset, I am well-equipped to contribute effectively to projects and achieve success in this field.</p>
                <div className="text-center mt-5">
                  <button className='animate__animated animate__fadeInUp animate__delay-4s orangeBtn mt-5 lg:mt-0 mb-10 lg:mb-5'
                    onClick={() => handleBtnClick(headerTitle[1].link)}>More About Me</button>
                </div>
              </div>
            }
            <img id='banner-img' className='m-auto w-4/5 2xl:w-auto' src={bannerImg.dark} alt='' />
          </div>
        </div>
      </div>
    </section>
  )
}
