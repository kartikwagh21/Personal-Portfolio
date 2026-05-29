import './About.css'

export default function About() {
  const stats = [
    { number: '20+', label: 'Projects' },
    { number: '100%', label: 'Dedication' },
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title fade-in">About Me</h2>

        <div className="about-content">
          <div className="about-text slide-in-left">
            <p className="about-intro">
              I'm a passionate frontend developer with a keen eye for creating intuitive and 
              engaging user experiences. My journey in web development has equipped me with 
              expertise in modern technologies and best practices.
            </p>

            <p className="about-description">
              I specialize in building responsive, high-performance applications using React, 
              JavaScript, and other cutting-edge technologies. I love problem-solving and 
              turning complex ideas into elegant solutions.
            </p>

            <div className="about-highlights">
              <div className="highlight-item">
                <span className="highlight-icon">🎯</span>
                <div>
                  <h4>Goal-Oriented</h4>
                  <p>Focused on delivering results that exceed expectations</p>
                </div>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">🚀</span>
                <div>
                  <h4>Innovative</h4>
                  <p>Always exploring new technologies and best practices</p>
                </div>
              </div>

              <div className="highlight-item">
                <span className="highlight-icon">💪</span>
                <div>
                  <h4>Reliable</h4>
                  <p>Committed to producing clean, maintainable code</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-stats slide-in-right">
            <div className="stats-container">
              {stats.map((stat, index) => (
                <div key={index} className="stat-card">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="about-image">
              <div className="image-placeholder">
                <div className="gradient-circle"></div>
                <div className="code-brackets">{'{ }'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
