import React from 'react'
import PropTypes from 'prop-types'

import styles from './IGButton.module.scss'

export const IGButton = ({ link, text }) => {
  return (
    <a
      className={`${styles.IGButton}`}
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      {text}
    </a>
  )
}

IGButton.propTypes = {
  link: PropTypes.string,
  text: PropTypes.string
}
