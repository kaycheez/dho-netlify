import React from 'react'
import "typeface-lato";

import { SlidesProvider } from 'src/context'
import {Layout} from 'components/Layout'

export const wrapPageElement = ({ element, ...restProps }, ...args) => {
  return (
    <Layout name="wrapRootElement" props={restProps} args={args} mode="browser">
      {element}
    </Layout>
  );
};

export const wrapRootElement = ({ element }) => (
  <SlidesProvider>{element}</SlidesProvider>
)
