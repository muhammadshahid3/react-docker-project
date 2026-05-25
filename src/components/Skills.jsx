import './Skills.css'

function Skills() {
  const skills = [
    {
      category: 'Frontend',
      items: ['React', 'JavaScript', 'HTML/CSS', 'Tailwind CSS', 'Vite']
    },
    {
      category: 'Backend',
      items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'REST APIs']
    },
    {
      category: 'Tools',
      items: ['Git', 'VS Code', 'Docker', 'Webpack', 'NPM']
    }
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>My Skills</h2>
        <p className="section-subtitle">Technologies and tools I work with</p>
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
