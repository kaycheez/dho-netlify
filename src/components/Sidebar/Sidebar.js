import React, { useState, useContext } from 'react'
import styles from './Sidebar.module.scss'
import { Link } from 'gatsby'
import { IGButton } from 'components/IGButton'
import { EmailButton } from 'components/EmailButton'
import hamburgerIcon from 'icons/hamburgerDark.svg'
import closeIcon from 'icons/close.svg'
import { SlidesContext } from 'src/context'
import { globalHistory as history } from '@reach/router'

export const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const {
    location: { pathname },
    navigate
  } = history
  const { isSlideOpen, setIsSlideOpen } = useContext(SlidesContext)
  const isHome = pathname === '/'

  // // menu/back button functionality
  const handleClick = () => {
    if (isHome) {
      // if home toggle nav
      setIsSidebarOpen(!isSidebarOpen)
    } else if (isSlideOpen) {
      // if slides are open, close
      setIsSlideOpen(false)
    } else {
      // if anything else navigate home
      setIsSlideOpen(false)
      setIsSidebarOpen(false)
      navigate('/')
    }
  }

  const hideSidebar = isHome && !isSidebarOpen
  const activeStyle = { textDecoration: 'underline' }

  return (
    <nav className={`${styles.sidebar}`}>
      <header className={`${styles.header}`}>
        <button className={`${styles.hamburger}`} onClick={handleClick}>
          <img src={isSlideOpen ? closeIcon : hamburgerIcon} alt='menu' />
        </button>
        <Link to='/'>
          <h1 className={`${styles.title}`}>
            <span>Visuals By</span>
            <span>David Ho</span>
          </h1>
        </Link>
      </header>
      <div className={`${styles.content} ${hideSidebar && styles.hide}`}>
        <section className={`${styles.directory}`}>
          <span className={`${styles.categoryTitle}`}>Photo</span>
          <div className={styles.categories}>
            <Link
              activeStyle={activeStyle}
              className={`${styles.category}`}
              to='/corporate'
            >
              Corporate
            </Link>
            <Link
              activeStyle={activeStyle}
              className={`${styles.category}`}
              to='/event'
            >
              Events
            </Link>
            <Link
              activeStyle={activeStyle}
              className={`${styles.category}`}
              to='/fashion'
            >
              Fashion
            </Link>
            <Link
              activeStyle={activeStyle}
              className={`${styles.category}`}
              to='/product'
            >
              Products
            </Link>
            <Link
              activeStyle={activeStyle}
              className={`${styles.category}`}
              to='/food'
            >
              Food
            </Link>
            <Link
              activeStyle={activeStyle}
              className={`${styles.category}`}
              to='/real-estate'
            >
              Real Estate
            </Link>
          </div>
        </section>
        <footer className={`${styles.footer}`}>
          <IGButton
            text='Instagram'
            link='https://www.instagram.com/dho.cr2/'
          />
          <EmailButton />
        </footer>
      </div>
    </nav>
  )
}
