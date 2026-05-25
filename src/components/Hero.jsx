import './Hero.css'

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="eyebrow">Hello, I am</p>
          <h1>Muhammad Shahid</h1>
          <p className="hero-title">DevOps Engineer</p>
          <p className="hero-description">
            I build modern deployment platforms and automated release pipelines leveraging Docker, GitHub Actions, AWS EC2, Laravel, and PHP.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View Projects
            </button>
            <button className="btn btn-secondary" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat-card">
            <span>4+</span>
            <p>Deployed applications</p>
          </div>
          <div className="stat-card">
            <span>CI/CD</span>
            <p>Automated deployment workflows</p>
          </div>
          <div className="stat-card">
            <span>AWS EC2</span>
            <p>Production cloud environments</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
