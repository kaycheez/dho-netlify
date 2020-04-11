import { useEffect } from 'react'
import PropTypes from 'prop-types'

export const useMountAndUnmount = ({ onMount, onUnmount }) => {
  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    if (onMount) {
      onMount()
    }

    return () => {
      if (onUnmount) {
        onUnmount()
      }
    }
  }, [])
  /* eslint-enable react-hooks/exhaustive-deps */
}

useMountAndUnmount.propTypes = {
  onMount: PropTypes.func,
  onUnmount: PropTypes.func,
}
