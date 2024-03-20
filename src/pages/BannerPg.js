import React from 'react'
import './Banner.scss'
import { useLanguage } from '../component/LanguageContext';

export default function BannerPg() {
  const { isVietnamese } = useLanguage();
  return (
    <section id='banner' className='w-screen pt-40 h-screen'>
      <div className="container revealUp">
        <div className="grid grid-cols-2">
          <div className="cool">
            <h1 className='text-7xl'>{isVietnamese ? 'Xin chào, tôi là' : `HI, I'M`}</h1>
            <h1 className='typewriter text-7xl mt-4 text-amber-500 font-extrabold'> THẢO HUỲNH</h1>
            <h1 className='py-5 text-4xl font-extrabold'> {isVietnamese ? 'LẬP TRÌNH VIÊN TRANG WEB' : 'A FULLSTACK WEBSITE DEVELOPER'}</h1>
            <p className='py-10'>
              {isVietnamese ? 'Với kỹ năng phân tích và sáng tạo mạnh mẽ, tôi xuất sắc trong việc thực hiện các công việc được đề ra khi làm việc độc lập và khi là một đồng đội của nhóm. Tôi là một người chú trọng vào chi tiết, có tư duy sắp xếp mọi việc gọn gàng và có khả năng hoàn thiện công việc một cách chất lượng. Tôi tự tin rằng bản thận được trang bị tốt về kiến thức cũng như tinh thần làm việc cầu thị để đóng góp một cách hiệu quả vào các dự án và đạt được thành công trong lĩnh vực này.'
                : 'With strong analytical and creative skills, I excel in tasks whether working independently or as part of a team. I am a detail-oriented individual who is organized and able to deliver quality work consistently. With a keen eye for detail and a collaborative mindset, I am well-equipped to contribute effectively to projects and achieve success in the field.'}</p>
            <button className='orangeBtn'> {isVietnamese ? 'Xem thêm về tôi' : 'More About Me'}</button>
          </div>
          <img src='https://i.pinimg.com/originals/6d/80/2f/6d802ffd14b32795b4deb0b886a7815a.gif' alt='' />
        </div>
      </div>
    </section>
  )
}
