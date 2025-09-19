import { BrowserRouter } from 'react-router-dom'

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
} from './sections'

import { StarsCanvas } from './components'

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center flex flex-col gap-5">
          <Navbar />
          <Hero />
        </div>

        <div className="flex flex-col items-center">
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
        </div>

        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
