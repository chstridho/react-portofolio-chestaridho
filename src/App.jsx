import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
  const [count, setCount] = useState(0)


  return (
    <div className="container">
  <nav>
  <div class="navbar-container">
    <a href="/" class="logo">FAWZIUIUX</a>
    <ul class="nav-links">
      <li><a href="/">Home</a></li>
      <li><a href="/about">About Me</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/projects">Projects</a></li>
      <li><a href="/testimonials">Testimonials</a></li>
      <li><a href="/contact">Contact</a></li>
      <li><button class="download-cv">Download CV</button></li>
    </ul>
  </div>
</nav>

<div className='hero'>
<h3>Hi I am</h3>
    <h2>Fawzi Sayed</h2>
    <h1>Website Developer</h1>
    <p>Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis tempus pharetra</p>
    <button>Hire Me</button>
</div>
</div>
  )
}

export default App
