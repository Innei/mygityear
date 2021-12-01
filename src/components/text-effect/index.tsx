import React, { useCallback, useEffect } from 'react'
import styles from './index.module.css'

interface TextEffectProps {
  textArray: string[]
  textSpeed?: number
  suffix?: string
  pauseTime?: number
  repeat?: boolean
}
export const TextEffect: React.FC<TextEffectProps> = (props) => {
  const {
    pauseTime = 1000,
    suffix = '|',
    textArray,
    textSpeed = 100,
    repeat = true,
  } = props
  const [currentText, setCurrentText] = React.useState('')
  const currentTextIndex = React.useRef(0)
  const timer = React.useRef<number>()
  const animate = useCallback(() => {
    setCurrentText((currentText) => {
      const currentFullText = textArray[currentTextIndex.current]
      let newText = ''
      if (currentFullText.length === currentText.length) {
        newText = ''
        if (repeat) {
          currentTextIndex.current =
            (currentTextIndex.current + 1) % textArray.length
        } else {
          const nextIndex = currentTextIndex.current + 1
          if (nextIndex === textArray.length) {
            currentTextIndex.current = nextIndex
          } else return currentFullText
        }
        timer.current = setTimeout(animate, textSpeed)
      } else {
        newText = currentText + currentFullText[currentText.length]
        timer.current = setTimeout(
          animate,
          currentFullText.length - 1 === currentText.length
            ? pauseTime
            : textSpeed,
        )
      }

      return newText
    })
  }, [pauseTime, repeat, textArray, textSpeed])

  useEffect(() => {
    const timer = setTimeout(animate, textSpeed)
    return () => clearTimeout(timer)
  }, [animate, textSpeed])

  useEffect(() => {
    return () => clearTimeout(timer.current)
  }, [])
  return (
    <h1>
      {currentText}
      <span className={`${styles['blink']} ${styles['cursor']}`}>{suffix}</span>
    </h1>
  )
}
