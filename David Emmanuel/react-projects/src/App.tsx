import { useState } from 'react'
import Menu from './Menu'
import projects from './Projects'
import './App.css'

function App() {
  const [project, setProject] = useState(Object.keys(projects)[0] as keyof typeof projects)
  const Component = projects[project].component

  return <div className='app'>
    <Menu project={project} setProject={setProject} />
    <main style={{flex: 1}}>
      <h1 style={{textAlign: 'center'}}>{project}</h1>
      <p className='description'><strong>Description:</strong> {projects[project].description}</p>
      <Component />
    </main>
  </div>
}

export default App
