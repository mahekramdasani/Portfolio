import React from 'react'
import MyCard from '../components/MyCard'
import { projects } from '../components/data'
import { Row,Col } from 'react-bootstrap'
const Projects = () => {
  return (
    <div className='project'>
    <h2 className='text-center'>Projects</h2>
    <div className='projects'>
      <Row>
      {
        projects.map((project)=>{
          return(
            <Col>
          <MyCard name={project.name} imageUrl={project.img} description={project.value} link={project.link}/>
          </Col>
        )})
      }
      </Row>
    </div>
    </div>
  )
}

export default Projects