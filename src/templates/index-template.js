import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'

import { Layout } from '../components/Layout'

const IndexPageTemplate = () => {
  return (
    <Layout>
      <div>
        <span />
      </div>
    </Layout>
  )
}

IndexPageTemplate.propTypes = {}

export { IndexPageTemplate }
export default IndexPageTemplate

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       frontmatter {
//         title
//       }
//     }
//   }
// `
