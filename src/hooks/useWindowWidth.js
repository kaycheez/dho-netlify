import React, { useEffect, useState } from 'react'
import {debounce} from 'lodash'

export const useWindowWidth = () => {
  const isBrowser = typeof window !== 'undefined'
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0)
  const isMobile = width && width <= 770

  useEffect(() => {
    if (!isBrowser) return null

    const handleResize = debounce(() => setWidth(window.innerWidth), 500)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  return { width, isMobile }
}
