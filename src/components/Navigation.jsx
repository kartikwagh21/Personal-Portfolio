import { useState, useEffect } from 'react'
import './Navigation.css'

export default function Navigation({ menuOpen, setMenuOpen }) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = ['Home', 'About', 'Projects', 'Skills', 'Contact']

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container nav-container">
        <div className="logo">
          <span className="logo-text">KW</span>
        </div>

        <button 
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`nav-links ${menuOpen ? 'active' : ''}`}>
          {navItems.map((item) => (
            <li key={item}>
              <a href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
