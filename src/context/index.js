import React, { useState, createContext } from 'react'

export const SlidesContext = createContext({ isSlideOpen: false, setIsSlideOpen: () => {}, })

export const SlidesProvider = ({ children }) => {
  const [isSlideOpen, setIsSlideOpen] = useState(false)

  return (
    <SlidesContext.Provider
      value={{
        isSlideOpen,
        setIsSlideOpen
      }}
    >
      {children}
    </SlidesContext.Provider>
  )
}
