import React, { useState, useEffect } from 'react'
import { globalHistory as history } from '@reach/router'
import Img from 'gatsby-image'
import {Link} from 'gatsby'

import styles from './Slideshow.module.scss'
import chevronRight from 'icons/chevron-right.svg'
import chevronLeft from 'icons/chevron-left.svg'

export const Slideshow = ({ nodes, slidesIndex = 0 }) => {
  const [index, setIndex] = useState(slidesIndex)
  const {
    location: { pathname }
  } = history
  const isHome = pathname === '/'

  let autoSlideRef

  useEffect(() => {
    if (isHome) {
      autoSlideRef = setTimeout(handleNext, 5000)
    }
  }, [index])

  const length = nodes.length - 1
  const handleNext = () => {
    clearTimeout(autoSlideRef)
    return index === length ? setIndex(0) : setIndex(index + 1)
  }
  const handlePrevious = () => {
    clearTimeout(autoSlideRef)
    return index === 0 ? setIndex(length) : setIndex(index - 1)
  }
  const currentNode = nodes[index]
  const imageStyle = { objectFit: isHome ? 'cover' : 'contain' }
  const name =
    currentNode.name === 'real-estate'
      ? 'Real Estate'
      : currentNode.name?.charAt(0).toUpperCase().concat(currentNode.name.substring(1))



  return (
    <div className={`${styles.Slideshow} ${styles.home}`}>
      <div className={styles.image}>
        <Img
          fluid={currentNode.childImageSharp.fluid}
          key={currentNode.id}
          alt={`slide show ${index + 1}`}
          imgStyle={imageStyle}
          style={{ height: '100%' }}
        />
      </div>
      <div className={styles.nav}>
        <button className={styles.arrowBtn} onClick={() => handlePrevious()}>
          <img src={chevronLeft} alt='left arrow' />
        </button>
        <button className={styles.arrowBtn} onClick={() => handleNext()}>
          <img src={chevronRight} alt='right arrow' />
        </button>
      </div>
      <Link to={`${currentNode.name}/`} className={styles.title}>{name}</Link>
    </div>
  )
}
