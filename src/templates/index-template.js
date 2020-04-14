import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Slideshow } from 'components/Slideshow'

export const IndexPageTemplate = ({ data }) => {
  const nodes = data?.allFile?.nodes.filter(node => node?.childImageSharp)
  return (
      <Slideshow nodes={nodes} />
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
          fluid(maxWidth: 2000) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
