import React, { useState } from 'react'
import styles from './Slideshow.module.scss'
import Img from 'gatsby-image'
import chevronRight from 'icons/chevron-right.svg'
import chevronLeft from 'icons/chevron-left.svg'

export const Slideshow = ({ nodes, slidesIndex }) => {
  const [index, setIndex] = useState(slidesIndex)

  const length = nodes.length - 1
  const handleNext = () =>
    index === length ? setIndex(0) : setIndex(index + 1)
  const handlePrevious = () =>
    index === 0 ? setIndex(length) : setIndex(index - 1)
  const currentNode = nodes[index]

  return (
    <div className={styles.Slideshow}>
      <div className={styles.image}>
        <Img
          fluid={currentNode.childImageSharp.fluid}
          key={currentNode.id}
          // alt={currentNode.name.replace(/-/g, ' ').substring(2)}
          imgStyle={{ objectFit: 'contain' }}
          style={{ height: '100%' }}
        />
      </div>
      <div className={styles.nav}>
        <button
          className={styles.arrowBtn}
          disabled={index === 0}
          onClick={() => handlePrevious()}
        >
          <img src={chevronLeft} alt='left arrow' />
        </button>
        <button
          className={styles.arrowBtn}
          disabled={index === length}
          onClick={() => handleNext()}
        >
          <img src={chevronRight} alt='right arrow' />
        </button>
      </div>
    </div>
  )
}
