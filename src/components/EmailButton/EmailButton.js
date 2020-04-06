import React from 'react'
import styles from './EmailButton.module.scss'

export const EmailButton = () => {
  const copyEmailToClipboard = () => {
    let textNode = document.createTextNode('visualsbydavidho@gmail.com')

    document.body.appendChild(textNode)
    if (document.body.createTextRange) {
      let range = document.body.createTextRange()
      range.moveToElementText(textNode)
      range.select()
      document.execCommand('copy')
    } else {
      let range = document.createRange()
      let selection = window.getSelection
      range.selectNodeContents(textNode)
      selection().removeAllRanges()
      selection().addRange(range)
      document.execCommand('copy')
      selection().removeAllRanges()
    }
    textNode.remove()
  }

  const displayCopiedMessage = () => {}

  return (
    <button
      className={styles.EmailButton}
      onClick={() => copyEmailToClipboard()}
    >
      Contact
    </button>
  )
}
