import React from 'react'

export default function BannerPg({ isVietnamese }) {
  return (
    <section className='w-screen pt-40 h-screen'>
      <div className="container">
        <div class="grid grid-cols-2">
          <div className="">
            <h1 className='text-7xl'>HI, I'M</h1>
            <h1 className='text-7xl text-amber-500 font-extrabold'> THAO HUYNH</h1>
            <h1 className='py-5 text-4xl font-extrabold'> A FULLSTACK WEBSITE DEVELOPER</h1>
            <p className='py-10'>With strong analytical and creative skills, I excel in tasks whether working independently or as part of a team. I am a detail-oriented individual who is organized and able to deliver quality work consistently. With a keen eye for detail and a collaborative mindset, I am well-equipped to contribute effectively to projects and achieve success in the field.</p>
            <button className='orangeBtn'> More About Me</button>
          </div>
          <img src='https://i.pinimg.com/originals/6d/80/2f/6d802ffd14b32795b4deb0b886a7815a.gif' alt='' />
        </div>
      </div>
    </section>
  )
}
