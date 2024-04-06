import React from 'react'
import { tools } from '../data/data'
import { useLanguage } from '../component/LanguageContext';

export default function ExperiencePg() {
  const { isVietnamese } = useLanguage();
  return (
    <section id='skills'>
      <div className="section-container">
        <div className="container">
          {isVietnamese ? (
            <div className="title lg:mb-10">
              <h1 className='text-5xl 2xl:text-7xl '> Kỹ năng & Công cụ lập trình </h1>
              <p className='lg:px-20 text-justify 2xl:text-xl'>Với kinh nghiệm chuyên môn vững về phát triển front-end của website và kiến thức sâu về việc xây dựng và kết nối backend, tôi không chỉ thành thạo trong việc xây dựng giao diện người dùng hấp dẫn mà còn có khả năng triển khai và quản lý các hệ thống API và cơ sở dữ liệu phía server. Tôi đã nghiên cứu và sử dụng nhiều phần mềm và công cụ thích hợp.</p>
            </div>
          ) : (
            <div className="title 2xl:mb-10">
              <h1 className='text-5xl 2xl:text-7xl '>Skills & Coding Tools</h1>
              <p className='lg:px-20 text-justify 2xl:text-xl'>With solid expertise in front-end website development, coupled with experience in backend development and integration, I excel not only in crafting engaging user interfaces but also in deploying and managing server-side API and database systems. I leverage a variety of professional software and tools.</p>
            </div>
          )}
          <div className='lg:mx-20 grid grid-cols-4 gap-2 lg:grid-cols-6 2xl:grid-cols-8 2xl:gap-4'>
            {tools.map((item, index) => <div key={index} className='animate__animated animate__slideInUp'>
              <img className='w-24 lg:w-20 2xl:w-30 p-3 lg:p-0 text-white m-auto' src={item.link} alt='' />
              <p className='2xl:text-xl text-center'>{item.title}</p>
            </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
