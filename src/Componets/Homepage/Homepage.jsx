import React from 'react'
import Herosection from './Pages/Herosection.jsx'
import Project from './Pages/Project .jsx'
import Skill from './Pages/Skill.jsx'
import Aboutme from './Pages/About Me/Aboutme.jsx'
import Form from '../ContactForm/Form.jsx'
function Homepage() {
  return (
    <div>
      <Herosection />
      <Project />
      <Aboutme />
      <Skill />
      <Form />
    </div>
  )
}

export default Homepage