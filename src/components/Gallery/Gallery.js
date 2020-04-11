import React, { useState, useContext } from 'react'
import styles from './Gallery.module.scss'
import { Grid } from 'components/Grid'
import { Slideshow } from 'components/Slideshow'
import { useMountAndUnmount } from 'src/hooks'
import { SlidesContext } from 'src/context'

export const Gallery = ({ nodes }) => {
  const [slidesIndex, setSlidesIndex] = useState(0)
  const { isSlideOpen, setIsSlideOpen } = useContext(SlidesContext)

  const onMount = () => {
    setIsSlideOpen(false)
  }

  useMountAndUnmount({ onMount })

  const handleClick = idx => {
    setSlidesIndex(idx)
    setIsSlideOpen(true)
  }

  return (
    <div className={styles.gallery}>
      {isSlideOpen ? (
        <Slideshow nodes={nodes} slidesIndex={slidesIndex} />
      ) : (
        <Grid nodes={nodes} onClick={handleClick} />
      )}
    </div>
  )
}
