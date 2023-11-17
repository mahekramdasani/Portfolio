import React from 'react'
import {HiOutlineMail} from 'react-icons/hi'
import {LiaLinkedin} from 'react-icons/lia'
import {AiFillGithub} from 'react-icons/ai'
import {GrInstagram} from 'react-icons/gr'
import {SiLeetcode} from 'react-icons/si'
import bg from '../images/bg.avif'
const Home = () => {
  return (
    <div className='home'>
      <h1>
      <span>&nbsp;<a href = "mailto:mahekramdasani@gmail.com"><HiOutlineMail className='icon'/></a></span>
      <span>&nbsp;<a href = "https://www.linkedin.com/in/mahek-ramdasani-b57398226/"><LiaLinkedin className='icon'/></a></span>
      <span>&nbsp;<a href = "https://github.com/mahekramdasani"><AiFillGithub className='icon'/></a></span>
      <span>&nbsp;<a href="https://www.instagram.com/mahek__ramdasani"><GrInstagram className='icon'/></a></span>
      <span>&nbsp;<a href="https://leetcode.com/mahekramdasani/"><SiLeetcode className='icon'/></a></span>
      </h1>
    </div>
  )
}

export default Home