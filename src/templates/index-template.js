import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Slideshow } from 'components/Slideshow'

import { Layout } from '../components/Layout'

export const IndexPageTemplate = ({ data }) => {
  const nodes = data?.allFile?.nodes.filter(node => node?.childImageSharp)
  return (
    <Layout>
      <Slideshow nodes={nodes} />
    </Layout>
  )
}

IndexPageTemplate.propTypes = {}

export default IndexPageTemplate

export const pageQuery = graphql`
  query indexTemplate {
    allFile(filter: { relativePath: { glob: "home/*" } }) {
      nodes {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
