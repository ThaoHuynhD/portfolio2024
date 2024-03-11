import React from 'react'

export default function ContactPg() {
  return (
    <section id='contact'>
      <div className="container top-1/2">
        <div className="grid">
          <div>
            <h1 className='text-7xl text-amber-500 font-extrabold'> Let's Work Together</h1>
            <button className='orangeBtn mt-10' onClick={() => { }} >SEND ME AN EMAIL</button>
          </div>
          <ul>
            <li>
              <div className='orangeBtn flex-center '>
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <div className="info">
                <p>Location:</p>
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
                <p>Call:</p>
                <span>(+84) 967 100 751</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
      {/* <div className="container">
        <p className='my-5 p-5 rounded-full text-center w-full bg-white text-black font-extrabold'> This Platform built by THAO HUYNH</p>
      </div> */}
    </section >
  )
}
