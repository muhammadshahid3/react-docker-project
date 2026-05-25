import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'Laravel Student Management System',
      description: 'A deployed student management platform built with Laravel and PHP for education workflows.',
      tags: ['Laravel', 'PHP', 'MySQL', 'AWS EC2'],
      status: 'Deployed',
      link: '#'
    },
    {
      id: 2,
      title: 'PHP News Application',
      description: 'A polished news delivery system built in PHP with live deployment and responsive delivery.',
      tags: ['PHP', 'MySQL', 'Nginx', 'AWS EC2'],
      status: 'Deployed',
      link: '#'
    },
    {
      id: 3,
      title: 'React Portfolio Application',
      description: 'Dockerized React portfolio deployed via CI/CD on AWS EC2 using GitHub Actions.',
      tags: ['React', 'Docker', 'GitHub Actions', 'AWS EC2'],
      status: 'Production',
      link: '#'
    },
    {
      id: 4,
      title: 'Docker & Pipeline Experiments',
      description: 'Multiple Docker and CI/CD pipeline experiments for container workflows and release automation.',
      tags: ['Docker', 'CI/CD', 'Docker Hub', 'Automation'],
      status: 'Ongoing',
      link: '#'
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Projects</div>
          <h2>Work that demonstrates DevOps delivery.</h2>
          <p className="section-subtitle">Selected deployments, pipeline experiments, and infrastructure-focused application work.</p>
        </div>
        <div className="projects-grid">
          {projects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-top">
                <span className="project-badge">{project.status}</span>
                <h3>{project.title}</h3>
              </div>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
              <a href={project.link} className="project-link">Learn More →</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
