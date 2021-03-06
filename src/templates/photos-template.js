import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { Gallery } from 'components/Gallery'

export const photosTemplate = ({ data }) => {
  const nodes = data?.allFile?.nodes.filter(node => node?.childImageSharp)

  return <Gallery nodes={nodes} />
}

photosTemplate.propTypes = {
  data: PropTypes.shape({
    page: PropTypes.shape({
      path: PropTypes.object,
      title: PropTypes.object
    })
  })
}

export default photosTemplate

export const photosTemplateQuery = graphql`
  query photosTemplate($directory: String!) {
    allFile(filter: { relativePath: { glob: $directory } }) {
      nodes {
        id
        childImageSharp {
          fluid(maxWidth: 1600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
