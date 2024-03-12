import React from 'react'

export default function ContactPg({ isVietnamese }) {
  return (
    <section id='contact'>
      <div className="container relative top-1/3">
        <div className="grid">
          <div>
            <h1 className='text-7xl text-amber-500 font-extrabold'> {isVietnamese ? 'Liên hệ làm việc ngay' : `Let's Work Together`}</h1>
            <button className='orangeBtn mt-10' onClick={() => { }} >{isVietnamese ? 'GỬI EMAIL NGAY' : 'SEND ME AN EMAIL'}</button>
          </div>
          <ul>
            <li>
              <div className='orangeBtn flex-center '>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="info">
                <p>{isVietnamese ? 'Địa chỉ:' : 'Location:'}</p>
                <span>District 10. Ho Chi Minh City</span>
              </div>
            </li>
            <li>
              <div className='orangeBtn flex-center '>
                <i className="fa-solid fa-envelope"></i>
              </div>
              <div className="info">
                <p>Email:</p>
                <span>thaohuynh34.678@gmail.com</span>
              </div>
            </li>
            <li>
              <div className='orangeBtn flex-center '>
                <i className="fa-solid fa-phone"></i>
              </div>
              <div className="info">
                <p>{isVietnamese ? 'Số điện thoại:' : 'Call:'}</p>
                <span>(+84) 967 100 751</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section >
  )
}
