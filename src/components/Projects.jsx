import { useState, useEffect } from 'react'
import './Projects.css'

export default function Projects() {
  const [hoveredId, setHoveredId] = useState(null)

  const getEmoji = (name = '', language = '') => {
    const n = (name || '').toLowerCase()
    if (n.includes('bootstrap')) return '🎨'
    if (n.includes('feedback')) return '💬'
    if (n.includes('tic') || n.includes('tic-tac') || n.includes('tac')) return '🎮'
    if (n.includes('animation')) return '✨'
    if (n.includes('semantic') || n.includes('multimedia')) return '🎧'
    if (n.includes('react')) return '⚛️'
    if (n.includes('css') || n.includes('grid')) return '🔲'
    if (n.includes('webpage') || n.includes('html') || n.includes('web')) return '🌐'
    if (n.includes('portfolio') || n.includes('project')) return '📁'
    if (n.includes('weather')) return '🌤️'
    if (n.includes('e-commerce') || n.includes('ecommerce')) return '🛒'
    if (n.includes('task') || n.includes('todo')) return '📋'
    if (language) {
      const l = (language || '').toLowerCase()
      if (l.includes('c')) return '💻'
      if (l.includes('javascript')) return '🟨'
      if (l.includes('html')) return '🌐'
      if (l.includes('css')) return '🎨'
      if (l.includes('python')) return '🐍'
    }
    return '📦'
  }

  const fallbackProjects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform built with React and Redux for state management.',
      tags: ['React', 'Redux', 'Node.js', 'MongoDB'],
      image: '🛒',
      link: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Real-time collaborative task management application with React hooks and Firebase.',
      tags: ['React', 'Firebase', 'Hooks', 'Tailwind CSS'],
      image: '📋',
      link: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'Interactive weather dashboard consuming APIs with real-time data visualization.',
      tags: ['React', 'API', 'Chart.js', 'Axios'],
      image: '🌤️',
      link: '#'
    }
  ]

  const [repos, setRepos] = useState([])
  const [loadingRepos, setLoadingRepos] = useState(true)

  useEffect(() => {
    async function fetchRepos() {
      try {
        const res = await fetch('https://api.github.com/users/kartikwagh21/repos?per_page=100')
        if (!res.ok) throw new Error('Failed to fetch')
        const data = await res.json()
        // prefer these specific repos (in this order)
        const preferredNames = [
          'Advanced-Bootstrap-Webpage',
          'Feedback-System-Using-C-',
          'CSS-Grid-Based-Tic-Tac-Toe',
          'Animation-Task',
          'Semantic-HTML-Multimedia-Webpage',
          'React-JS-Mini-project'
        ]

        const byName = new Map(data.map(r => [r.name, r]))

        const selected = []
        const selectedNames = new Set()

        for (const n of preferredNames) {
          const repo = byName.get(n)
          if (repo && !repo.fork) {
            selected.push(repo)
            selectedNames.add(repo.name)
          }
        }

        // fill any remaining slots with most recently pushed repos (non-forks)
        if (selected.length < 6) {
          const extra = data
            .filter(r => !r.fork && !selectedNames.has(r.name))
            .sort((a, b) => new Date(b.pushed_at) - new Date(a.pushed_at))
            .slice(0, 6 - selected.length)
          selected.push(...extra)
        }

        const top = selected.slice(0, 6).map((r, idx) => ({
          id: r.id || idx,
          title: r.name,
          description: r.description || '',
          tags: r.language ? [r.language] : [],
          image: getEmoji(r.name, r.language),
          link: r.html_url
        }))

        setRepos(top)
      } catch (err) {
        console.error('Error fetching repos:', err)
        setRepos([])
      } finally {
        setLoadingRepos(false)
      }
    }

    fetchRepos()
  }, [])

  return (
    <section id="projects" className="projects section">
      <div className="container">
        <h2 className="section-title fade-in">Projects</h2>

        <div className="projects-grid">
          {(repos.length > 0 ? repos : fallbackProjects).map((project) => (
            <div
              key={project.id}
              className="project-card fade-in"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="project-image">
                <div className="image-emoji">{project.image}</div>
              </div>

              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                {project.description && (
                  <p className="project-description">{project.description}</p>
                )}

                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>

                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View Project
                  <span className="link-arrow">→</span>
                </a>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
