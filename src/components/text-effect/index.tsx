import React, { memo, useCallback, useEffect } from 'react'
import styles from './index.module.css'

interface TextEffectProps {
  textArray: string[]
  textSpeed?: number
  suffix?: string
  pauseTime?: number
  repeat?: boolean
  pause?: boolean
  tag?: keyof JSX.IntrinsicElements
}
export const TextEffect: React.FC<
  TextEffectProps & JSX.IntrinsicElements['span']
> = memo((props) => {
  const {
    pauseTime = 1000,
    suffix = '|',
    textArray: _textArray,
    textSpeed = 100,
    repeat = true,
    tag = 'h1',
    pause = false,
    ...rest
  } = props

  const textArray = React.useMemo(
    () => _textArray.filter((text) => text.length > 0),
    [_textArray],
  )

  const [currentText, setCurrentText] = React.useState('')
  const currentTextIndex = React.useRef(0)
  const timer = React.useRef<any>()
  const isAnimate = React.useRef(!pause)

  useEffect(() => {
    if (pause) {
      timer.current = clearTimeout(timer.current)
    } else {
      if (isAnimate.current) {
        return
      }
      animate()
    }
  }, [pause])

  const animate = useCallback(() => {
    setCurrentText((currentText) => {
      isAnimate.current = false
      // Transform to array to solve emoji split into two characters
      // @see: https://stackoverflow.com/questions/24531751/how-can-i-split-a-string-containing-emoji-into-an-array
      const currentTextArray = Array.from(currentText)
      const currentFullTextArray = Array.from(
        textArray[currentTextIndex.current],
      )
      let newText = ''

      if (currentFullTextArray.length === currentTextArray.length) {
        newText = ''
        if (repeat) {
          currentTextIndex.current =
            (currentTextIndex.current + 1) % textArray.length
        } else {
          const nextIndex = currentTextIndex.current + 1
          if (nextIndex === textArray.length) {
            currentTextIndex.current = nextIndex
          } else return currentFullTextArray.join('')
        }
        isAnimate.current = true
        timer.current = setTimeout(animate, textSpeed)
      } else {
        newText = currentText + currentFullTextArray[currentTextArray.length]
        isAnimate.current = true
        timer.current = setTimeout(
          animate,
          currentFullTextArray.length - 1 === currentTextArray.length
            ? pauseTime
            : textSpeed,
        )
      }

      return newText
    })
  }, [pauseTime, repeat, textArray, textSpeed])

  useEffect(() => {
    if (pause) {
      // ???????????????, ???????????????
      setCurrentText(textArray[currentTextIndex.current])
      return
    }
    const timer = setTimeout(animate, textSpeed)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [animate, textSpeed])

  useEffect(() => {
    return () => clearTimeout(timer.current)
  }, [])
  return React.createElement(
    tag,
    {
      ...rest,
    },
    <>
      {currentText}
      <span className={`${styles['blink']} ${styles['cursor']}`}>{suffix}</span>
    </>,
  )
})
