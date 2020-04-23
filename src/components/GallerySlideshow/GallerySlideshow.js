import React, { useState, useContext } from 'react'

import { SlidesContext } from 'src/context'

import styles from './GallerySlideshow.module.scss'
import chevronRight from 'icons/chevron-right.svg'
import chevronLeft from 'icons/chevron-left.svg'

export const GallerySlideshow = ({ nodes, slidesIndex = 0 }) => {
  const [index, setIndex] = useState(slidesIndex)

  const { setIsSlideOpen } = useContext(SlidesContext)

  const length = nodes.length - 1
  const handleNext = () => {
    return index === length ? setIndex(0) : setIndex(index + 1)
  }
  const handlePrevious = () => {
    return index === 0 ? setIndex(length) : setIndex(index - 1)
  }
  const currentNode = nodes[index]

  return (
    <div className={styles.Slideshow}>
      <div
        className={styles.imageContainer}
        onClick={() => setIsSlideOpen(false)}
      >
        <img
          src={currentNode.childImageSharp.fluid.src}
          className={styles.image}
          alt={`slide show ${index + 1}`}
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
