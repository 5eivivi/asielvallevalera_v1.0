import { Home } from '../pages/Home.jsx'
import { About } from '../pages/About.jsx'
import { Skills } from '../pages/Skills.jsx'
import { Projects } from '../pages/Projects.jsx'

export const Body = () => {
  return (
    <main className='body'>
      <Home />
      <About />
      <Skills />
      <Projects />
    </main>
  )
}
