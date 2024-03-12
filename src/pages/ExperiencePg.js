import React from 'react'
import { tools } from '../data/data'

export default function ExperiencePg({ isVietnamese }) {
  return (
    <section id='experiences'>
      <div className="container">
        {isVietnamese ? (
          <div className="title mb-10">
            <h1> Kỹ năng & Công cụ lập trình </h1>
            <p>Với kinh nghiệm chuyên môn vững về phát triển front-end của website và kiến thức sâu về việc xây dựng và kết nối backend, tôi không chỉ thành thạo trong việc xây dựng giao diện người dùng hấp dẫn mà còn có khả năng triển khai và quản lý các hệ thống API và cơ sở dữ liệu phía server. Để đảm bảo rằng dự án của tôi luôn hoạt động một cách mượt mà và hiệu quả, tôi đã nghiên cứu và sử dụng nhiều phần mềm và công cụ thích hợp.</p>
          </div>
        ) : (
          <div className="title mb-10">
            <h1>Skills & Coding Tools</h1>
            <p>With solid expertise in front-end website development, coupled with experience in backend development and integration, I excel not only in crafting engaging user interfaces but also in deploying and managing server-side API and database systems. To ensure smooth and efficient operation of my projects, I leverage a variety of professional software and tools.</p>
          </div>
        )}
        <div className='grid grid-cols-8 gap-4'>
          {tools.map((item, index) => <div key={index}>
            <img className='w-30 p-3 text-white m-auto' src={item.link} alt='' />
            <p className='text-2xl text-center'>{item.title}</p>
          </div>
          )}
        </div>
      </div>
    </section>
  )
}
