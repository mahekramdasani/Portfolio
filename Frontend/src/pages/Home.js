import React from 'react'
import { socialLinks } from '../components/data'
const Home = () => {
  return (
    <div className='home'>
      <h1>
      {socialLinks.map((socialLink, index) => (
  <span key={index}>
    &nbsp;<a href={socialLink.link} target='_blank'>{socialLink.icon}</a>
  </span>
))}

      </h1>
    </div>
  )
}

export default Home