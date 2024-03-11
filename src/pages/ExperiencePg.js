import React from 'react'
import { tools } from '../data/data'

export default function ExperiencePg() {
  return (
    <section id='experiences'>
      <div className="container">
        <div class="title mb-10">
          <h1>Skills & Experiences</h1>
          <p>The main area of expertise is front end development (client side of the web).
            <br />
            HTML, CSS, JS, building small and medium web applications with React, custom plugins, features, animations, and coding interactive layouts. I have also full-stack developer experience with one of the most popular open source CMS on the web - WordPress
            <br />Visit my Linkedin for more details.</p>
        </div>
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
