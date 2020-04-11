import React from 'react'
import { SlidesProvider } from 'src/context'
import "typeface-lato";

export const wrapRootElement = ({ element }) => (
  <SlidesProvider>{element}</SlidesProvider>
)
