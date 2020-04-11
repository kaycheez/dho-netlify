import React from 'react'
import styles from './Grid.module.scss'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

export const Grid = ({ nodes, onClick }) => {
  return (
    <div className={styles.Grid}>
      {nodes &&
        nodes.map((node, idx) => {
          return (
            <div
              className={styles.gridItem}
              key={node.id}
              onClick={() => onClick(idx)}
            >
              <Img
                alt={`grid photo ${idx + 1}`}
                fluid={node.childImageSharp.fluid}
              />
            </div>
          )
        })}
    </div>
  )
}

Grid.propTypes = {
  onClick: PropTypes.func,
  images: PropTypes.array
}
