import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-grid">
        <div className="about-copy">
          <div className="section-label">About Me</div>
          <h2>Building efficient deployment pipelines and cloud-ready systems.</h2>
          <p className="section-subtitle">
            I am Muhammad Shahid, a DevOps Engineer focused on automation, infrastructure reliability, and modern deployment practices.
          </p>
          <p>
            I design production-ready deployment workflows using Docker, GitHub Actions, and AWS EC2. I bring applications from code to live infrastructure with a strong emphasis on security, observability, and developer velocity.
          </p>
          <div className="about-highlights">
            <div className="highlight-card">
              <span>Docker</span>
              <p>Containerization for consistent builds and fast delivery.</p>
            </div>
            <div className="highlight-card">
              <span>CI/CD</span>
              <p>Automated pipelines for testing, building and deployment.</p>
            </div>
            <div className="highlight-card">
              <span>AWS EC2</span>
              <p>Reliable deployment on cloud infrastructure with Nginx and monitoring.</p>
            </div>
          </div>
        </div>

        <div className="about-panel">
          <div className="about-panel-card">
            <h3>Core strengths</h3>
            <ul>
              <li>Production deployments using Docker and AWS EC2</li>
              <li>CI/CD automation with GitHub Actions</li>
              <li>Linux server administration and Nginx configuration</li>
              <li>Laravel/PHP app deployments and app lifecycle management</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
