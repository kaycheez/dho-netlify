const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = async ({ actions, graphql }) => {
  const { createPage } = actions

  const { data } = await graphql(`
    {
      allPage(limit: 1000) {
        nodes {
          id
          templateKey
          path
        }
      }
    }
  `)

  if (data.errors) {
    result.errors.forEach((e) => console.error(e.toString()))
    return Promise.reject(result.errors)
  }

  const posts = data.allPage.nodes

  posts.forEach(({ id, path: pagePath, templateKey }) => {
    createPage({
      path: pagePath,
      component: path.resolve(`src/templates/${String(templateKey)}.js`),
      // additional data can be passed via context
      context: {
        directory: `${pagePath}/*`,
      },
    })
  })

  return posts
}

