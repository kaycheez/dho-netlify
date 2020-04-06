import React, { useEffect, useState, useContext } from 'react'
import { globalHistory as history } from '@reach/router'
import PropTypes from 'prop-types'
import styles from './HamburgerIcon.module.scss'
// import { SlidesContext } from '../../Context/SlidesContext'

export const HamburgerIcon = ({ onClick }) => {
  // const { showSidebar } = useContext(SlidesContext)
  const { location, navigate } = history
  const [isDark, setIsDark] = useState(null)

  // useEffect(() => {
  //   if (props.path !== '/') {
  //     setIsDark(styles.isDark)
  //   } else {
  //     setIsDark(null)
  //   }
  // }, [props.path])

  const toggleIcon = () => {
    // if (showSidebar) {
    //   return styles.isActive
    // } else {
    //   return 'null'
    // }
  }

  const showSidebar = false

  return (
    <button
      onClick={onClick}
      className={`${styles.hamburger} ${showSidebar && styles.isActive}`}
    >
      <span className={styles.hamburgerInner} />
    </button>
  )
}

HamburgerIcon.propTypes = {
  onClick: PropTypes.string
}
