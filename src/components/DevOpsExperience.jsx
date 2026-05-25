import './DevOpsExperience.css'

function DevOpsExperience() {
  const pipelineSteps = [
    'Source control and pull request automation with GitHub.',
    'Docker builds for consistent staging and production artifacts.',
    'Image publishing to Docker Hub for versioned deployments.',
    'AWS EC2 provisioning with Nginx reverse proxy and secure access.',
    'Continuous deployment through GitHub Actions to live infrastructure.'
  ]

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <div className="section-label">DevOps Experience</div>
          <h2>From code commits to cloud deployment.</h2>
          <p className="section-subtitle">
            A modern DevOps workflow built around GitHub, Docker, and AWS EC2.
          </p>
        </div>

        <div className="experience-grid">
          <div className="experience-copy">
            <p>
              I have built CI/CD systems that take application changes from source control through automated testing, containerization, and deployment to AWS EC2. The workflow delivers dependable releases and reduces manual handoffs.
            </p>
            <ul className="experience-list">
              {pipelineSteps.map((step, idx) => (
                <li key={idx}>{step}</li>
              ))}
            </ul>
          </div>

          <div className="experience-visual">
            <div className="pipeline-card">
              <div className="pipeline-step">GitHub</div>
              <div className="pipeline-arrow">→</div>
              <div className="pipeline-step">Docker Build</div>
              <div className="pipeline-arrow">→</div>
              <div className="pipeline-step">Docker Hub</div>
              <div className="pipeline-arrow">→</div>
              <div className="pipeline-step">AWS EC2</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DevOpsExperience
