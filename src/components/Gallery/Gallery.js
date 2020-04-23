import React, { useState, useContext } from 'react'
import styles from './Gallery.module.scss'
import { Grid } from 'components/Grid'
import { GallerySlideshow } from 'components/GallerySlideshow'
import { useMountAndUnmount } from 'src/hooks'
import { SlidesContext } from 'src/context'
import { useWindowWidth } from 'src/hooks'

export const Gallery = ({ nodes }) => {
  const [slidesIndex, setSlidesIndex] = useState(0)
  const { isSlideOpen, setIsSlideOpen } = useContext(SlidesContext)
  const { isMobile } = useWindowWidth()

  const onMount = () => {
    setIsSlideOpen(false)
  }

  useMountAndUnmount({ onMount })

  const handleClick = idx => {
    if (!isMobile) {
      setSlidesIndex(idx)
      setIsSlideOpen(true)
    }
  }

  return (
    <div className={styles.gallery}>
      {isSlideOpen ? (
        <GallerySlideshow nodes={nodes} slidesIndex={slidesIndex} />
      ) : (
        <Grid nodes={nodes} onClick={handleClick} />
      )}
    </div>
  )
}
