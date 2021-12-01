import React, { useCallback, useEffect } from 'react'
import { getRandomArbitrary } from '../../utils'
import styles from './index.module.css'

const defaultColors = [
  '#F4A8D7',
  '#D8BBEB',
  '#C0C9F8',
  '#8DE2F7',
  '#84EBE6',
  '#A8F6B6',
]
export const Background: React.FC = () => {
  const [colorElements, setColorElement] = React.useState(
    [] as { color: string; d: number; x: number; y: number; id: string }[],
  )
  useEffect(() => {
    const _colorElements: typeof colorElements = []
    const repeatColor = (() => {
      const arr: string[] = []
      let i = 0
      while (i++ < 8) {
        arr.push(...defaultColors)
      }
      return arr.sort(() => Math.random() - 0.5)
    })()
    for (const c of repeatColor) {
      const point = pointRandomize(window.innerHeight, window.innerWidth)
      _colorElements.push({
        id: Math.random().toString(16).slice(2, 7),
        color: c,
        d: point.diameter,
        x: point.offsetX,
        y: point.offsetY,
      })
    }

    setColorElement(_colorElements)
  }, [])

  const animate = useCallback(() => {
    setColorElement((colorElements) => {
      const newColorElements: typeof colorElements = []
      colorElements.forEach((c) => {
        const newPoint = pointRandomize(window.innerHeight, window.innerWidth)
        newColorElements.push({
          ...c,
          x: newPoint.offsetX,
          y: newPoint.offsetY,
        })
      })

      return newColorElements
    })
  }, [])
  useEffect(() => {
    let timer: any
    setTimeout(() => {
      animate()
    }, 0)
    timer = setInterval(animate, 5000)

    return () => {
      timer = clearInterval(timer)
    }
  }, [animate])
  return (
    <div className={styles['root']}>
      {colorElements.map((c, i) => (
        <div
          className={styles['circle']}
          key={c.id}
          style={
            {
              '--color': c.color,
              '--x': c.x + 'px',
              '--y': c.y + 'px',
              '--size': c.d / 2 + 'px',
            } as any
          }
        ></div>
      ))}
    </div>
  )
}

function pointRandomize(height: number, width: number) {
  const decision = (height + width) / 4
  return {
    diameter: getRandomArbitrary(decision * 0.25, decision * 0.75),
    offsetX: getRandomArbitrary(-width / 2, +width),
    offsetY: getRandomArbitrary(-height / 2, +height),
  }
}
