import React from 'react'
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
        name
        childImageSharp {
          fluid(sizes: "(max-width: 770px) calc(100vw * 3), 2000px") {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
