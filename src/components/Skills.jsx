import './Skills.css'

function Skills() {
  const skills = [
    {
      category: 'DevOps & Cloud',
      items: ['Docker', 'CI/CD', 'GitHub Actions', 'AWS EC2', 'Linux']
    },
    {
      category: 'Web & Infrastructure',
      items: ['Nginx', 'Laravel', 'PHP', 'React', 'REST APIs']
    },
    {
      category: 'Automation',
      items: ['Docker Hub', 'Deployment Automation', 'Monitoring', 'Shell Scripting']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <div className="section-label">Skills</div>
          <h2>Technical strengths for dependable delivery.</h2>
          <p className="section-subtitle">Tools and technologies I rely on for infrastructure automation and production deployments.</p>
        </div>
        <div className="skills-grid">
          {skills.map((skillGroup, idx) => (
            <div key={idx} className="skill-group">
              <h3>{skillGroup.category}</h3>
              <ul>
                {skillGroup.items.map((skill, i) => (
                  <li key={i}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
