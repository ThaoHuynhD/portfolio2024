import React from 'react'
import { aboutDetail } from '../data/data'
import { useLanguage } from '../component/LanguageContext';

export default function ContactPg() {
  const { isVietnamese } = useLanguage();

  function redirectToGmail() {
    var email = 'thaohuynh34.678@gmail.com';
    var gmailURL = 'https://mail.google.com/mail/?view=cm&fs=1&to=' + encodeURIComponent(email);
    window.open(gmailURL, '_blank')
  }

  function initiateCall() {
    var phoneNumber = '0967100751';
    var telURI = 'tel:' + phoneNumber;
    window.open(telURI, '_blank')
  }

  const handleBtnClick = (index) => {
    if (index === 1) {
      initiateCall();
    } else if (index === 2) {
      redirectToGmail();
    }
  }
  return (
    <section id='contact'>
      <div className="section-container">
        <div className="container p-0">
          <div className="lg:grid lg:grid-cols-2 lg:pl-10 sm:pl-0">
            <div className=' relative lg:-left-20 xl:left-0'>
              <h1 className='text-7xl text-amber-500 font-extrabold 
              animate__animated animate__bounce animate__delay-3s animate__infinite animate__slower'> {isVietnamese ? 'Liên hệ làm việc ngay!' : `Let's Work Together!`}</h1>
              <button className='orangeBtn mt-10 animate__animated animate__tada animate__delay-4s'
                onClick={() => { redirectToGmail() }}
              >{isVietnamese ? 'GỬI EMAIL NGAY' : 'SEND ME AN EMAIL'}</button>
            </div>
            <ul className='mt-10 lg:mt-auto'>
              {aboutDetail.map((item, index) => {
                return <li key={index} className={`animate__animated animate__fadeInRight` + ' animate__delay-' + index + 's'}>
                  <div className='min-w-10 orangeBtn flex-center'>
                    <i className={item.icon}></i>
                  </div>
                  <div className="info">
                    <p>{isVietnamese ? item.vntitle : item.title}</p>
                    <span className='lg:text-xl inline-block min-w-96'
                      onClick={() => { handleBtnClick(index) }}

                    >{isVietnamese ? item.vndata : item.data}</span>
                  </div>
                </li>
              })}
            </ul>
          </div>
        </div>
      </div>
    </section >
  )
}
