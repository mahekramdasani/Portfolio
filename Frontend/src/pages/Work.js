import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaBuilding,FaLaptopCode } from 'react-icons/fa'
import { MdOutlineWork } from 'react-icons/md'
import { workData } from '../components/data';
const Work = () => {
  return (
    <>
    <div className="experience">
      
      <h2 className="text-center"><MdOutlineWork className='icon'/> Work Experience</h2>
      <hr/>
      {workData.map((work, index) => (
        <div key={index}>
          <img src={work.img} alt={work.name} height='80px' width='200px'/>
          <Row>
            <Col>
              <p><FaLaptopCode className='icon'/> {work.role}</p>
            </Col>
            <Col>
              <p className='text-end'>{work.joinDate} - {work.current==="YES" ? 'Present' : work.endDate}</p>
            </Col>
          </Row>
          <p>{work.description}</p>
          <p><span>Skills Developed:</span> {work.skills.join(', ')}</p>
          <div style={{display: 'flex', justifyContent: 'center'}}>
            <a href={work.link} target='_blank' rel='noreferrer' className="link btn" style={{height: '50px', width: '150px'}}>View Website</a>
          </div>
          <hr/>
        </div>
      ))}
    </div>

    </>
  )
}

export default Work