import React from 'react'
import PropTypes from 'prop-types'

import styles from './IGButton.module.scss'

export const IGButton = ({ classname, link, text }) => {
  return (
    <a
      className={`${classname} ${styles.IGButton}`}
      href={link}
      target='_blank'
      rel='noopener noreferrer'
    >
      {text}
    </a>
  )
}

IGButton.propTypes = {
  classname: PropTypes.string,
  link: PropTypes.string,
  text: PropTypes.string
}
