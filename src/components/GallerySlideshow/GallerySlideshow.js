import React, { useState, useContext, useEffect } from 'react'
import Img from 'gatsby-image'

import { SlidesContext } from 'src/context'
import { useKey } from 'src/hooks'
import chevronRight from 'icons/chevron-right.svg'
import chevronLeft from 'icons/chevron-left.svg'

import styles from './GallerySlideshow.module.scss'

export const GallerySlideshow = ({ nodes, slidesIndex = 0 }) => {
  const [index, setIndex] = useState(slidesIndex)
  const { setIsSlideOpen } = useContext(SlidesContext)
  const length = nodes.length - 1
  const currentNode = nodes[index]
  const rightKeyPressed = useKey(39)
  const leftKeyPressed = useKey(37)
  const escKeyPressed = useKey(27)

  const handleNext = () => {
    return index === length ? setIndex(0) : setIndex(index + 1)
  }
  const handlePrevious = () => {
    return index === 0 ? setIndex(length) : setIndex(index - 1)
  }
  const handleClose = () => {
    setIsSlideOpen(false)
  }

  useEffect(() => {
    if (rightKeyPressed) {
      handleNext()
    }
    if (leftKeyPressed) {
      handlePrevious()
    }
    if (escKeyPressed) {
      handleClose()
    }
  }, [
    rightKeyPressed,
    leftKeyPressed,
    escKeyPressed,
  ])

  return (
    <div className={styles.Slideshow}>
      <div className={styles.imageContainer} onClick={handleClose}>
        <Img
          fluid={currentNode.childImageSharp.fluid}
          key={currentNode.id}
          alt={`slide show ${index + 1}`}
          imgStyle={{ objectFit: 'contain' }}
          placeholderStyle={{ display: 'none' }}
          style={{ height: '100%', width: '100%' }}
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
    </div>
  )
}
