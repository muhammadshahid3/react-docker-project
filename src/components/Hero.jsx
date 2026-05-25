import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>Hi, I'm a Full Stack Developer</h1>
          <p className="hero-subtitle">
            I create beautiful, responsive web applications using modern technologies
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary">View My Work</button>
            <button className="btn btn-secondary">Get In Touch</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
