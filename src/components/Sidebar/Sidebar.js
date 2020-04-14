import React, { useState, useContext, useEffect } from 'react'
import { Link } from 'gatsby'
import { globalHistory as history } from '@reach/router'

import { IGButton } from 'components/IGButton'
import { EmailButton } from 'components/EmailButton'
import { SlidesContext } from 'src/context'
import { useWindowWidth } from 'src/hooks'

import closeDarkIcon from 'icons/closeDark.svg'
import closeLightIcon from 'icons/closeLight.svg'
import hamburgerIcon from 'icons/hamburgerDark.svg'
import homeIcon from 'icons/home.svg'
import styles from './Sidebar.module.scss'

export const Sidebar = () => {
  const { isMobile } = useWindowWidth()
  const {
    location: { pathname },
    navigate
  } = history
  const isHome = pathname === '/'
  const isToggleable = isHome || isMobile
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { isSlideOpen, setIsSlideOpen } = useContext(SlidesContext)
  const isDarkTheme = isToggleable && isSidebarOpen

  useEffect(() => {
    if (!isToggleable) {
      setIsSidebarOpen(true)
    } else {
      setIsSidebarOpen(false)
    }
  }, [isToggleable])

  // // menu/back button functionality
  const handleClick = () => {
    if (isToggleable) {
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

  const activeStyle = { textDecoration: 'underline' }

  return (
    <nav
      className={`
      ${styles.sidebar} 
      ${isToggleable && styles.toggle} 
      ${isDarkTheme && styles.dark}`}
    >
      <div className={styles.sidebarContainer}>
        <header className={`${styles.header}`}>
          <button className={`${styles.hamburger}`} onClick={handleClick}>
            <img
              src={
                isToggleable
                  ? isSidebarOpen
                    ? closeLightIcon
                    : hamburgerIcon
                  : isSlideOpen
                  ? closeDarkIcon
                  : homeIcon
              }
              alt='menu'
            />
          </button>
          <Link to='/'>
            <h1 className={`${styles.title}`}>
              <span>Visuals By</span>
              <span>David Ho</span>
            </h1>
          </Link>
        </header>
        <div className={`${styles.content} ${!isSidebarOpen && styles.hide}`}>
          <section className={`${styles.directory}`}>
            <span className={`${styles.categoryTitle}`}>Photo</span>
            <div className={styles.categories}>
              <Link
                activeStyle={activeStyle}
                className={`${styles.category}`}
                to='/corporate/'
              >
                Corporate
              </Link>
              <Link
                activeStyle={activeStyle}
                className={`${styles.category}`}
                to='/events/'
              >
                Events
              </Link>
              <Link
                activeStyle={activeStyle}
                className={`${styles.category}`}
                to='/fashion/'
              >
                Fashion
              </Link>
              <Link
                activeStyle={activeStyle}
                className={`${styles.category}`}
                to='/food/'
              >
                Food
              </Link>
              <Link
                activeStyle={activeStyle}
                className={`${styles.category}`}
                to='/product/'
              >
                Products
              </Link>
              <Link
                activeStyle={activeStyle}
                className={`${styles.category}`}
                to='/real-estate/'
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
      </div>
    </nav>
  )
}
