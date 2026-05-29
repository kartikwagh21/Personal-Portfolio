import { useState } from 'react'
import './Skills.css'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState('frontend')

  const skillsData = {
    frontend: [
      { name: 'React', level: 95, icon: '⚛️' },
      { name: 'JavaScript', level: 90, icon: '📜' },
      { name: 'HTML/CSS', level: 95, icon: '🎨' },
      { name: 'Tailwind CSS', level: 88, icon: '🌊' },
      { name: 'Redux', level: 85, icon: '🔄' },
      { name: 'Vite', level: 87, icon: '⚡' }
    ],
    /* backend removed per request: keeping only frontend and tools */
    tools: [
      { name: 'Git', level: 90, icon: '🌳' },
      { name: 'VS Code', level: 95, icon: '💻' },
      { name: 'Figma', level: 75, icon: '🎭' },
      { name: 'Docker', level: 70, icon: '🐳' },
      { name: 'Firebase', level: 82, icon: '🔥' },
      { name: 'Postman', level: 88, icon: '📮' }
    ]
  }

  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'tools', label: 'Tools & Others' }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title fade-in">Skills & Technologies</h2>

        <div className="skills-container">
          <div className="category-tabs fade-in">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`tab-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>

          <div className="skills-grid slide-in-left">
            {skillsData[activeCategory].map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-header">
                  <div className="skill-icon">{skill.icon}</div>
                  <div className="skill-info">
                    <h4 className="skill-name">{skill.name}</h4>
                    <span className="skill-percentage">{skill.level}%</span>
                  </div>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill"
                    style={{ 
                      width: `${skill.level}%`,
                      animation: `fillBar 1s ease-out ${index * 0.1}s both`
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="skills-summary fade-in">
          <div className="summary-card">
            <div className="summary-icon">🎓</div>
            <h3>Continuous Learning</h3>
            <p>Always updating skills with latest technologies and best practices</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🤝</div>
            <h3>Collaboration</h3>
            <p>Experienced in team environments with strong communication skills</p>
          </div>
          <div className="summary-card">
            <div className="summary-icon">🔧</div>
            <h3>Problem Solving</h3>
            <p>Expert at debugging and finding elegant solutions to complex problems</p>
          </div>
        </div>
      </div>
    </section>
  )
}
