import React from 'react'
import MyCard from '../components/MyCard'
import { projects } from '../components/data'
import { Row,Col } from 'react-bootstrap'
const Projects = () => {
  return (
    <div className='project'>
    <h2 className='text-center'>Projects</h2>
    <div className='projects'>
      <Row xs={1} md={2}>
      {
        projects.map((project, index) => (
            <Col key={index}>
              <MyCard name={project.name} imageUrl={project.img} description={project.value} link={project.link}/>
            </Col>
        ))
      }
      </Row>
    </div>
    </div>
  )
}

export default Projects