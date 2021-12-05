import clsx from 'clsx'
import { range } from 'lodash-es'
import React, { useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'
import { getRandomArbitrary } from '../../utils'
import styles from './index.module.css'

const size = 10
const gap = 5
const day = 364
const rowCount = 14
const width = rowCount * size + (rowCount - 1) * gap
const height = size * (day / rowCount) + (day / rowCount - 1) * gap

const levelMatrix = range(day).map(() => Math.floor(Math.random() * 3))
export const CodeTiles: React.FC = () => {
  const $ref = useRef<SVGSVGElement>(null)
  const { ref, inView } = useInView()
  const done = useRef(false)
  useEffect(() => {
    const $svg = $ref.current
    if (!$svg) {
      return
    }

    if (!inView) {
      return
    }

    if (done.current) {
      return
    }
    const $rects = $svg.querySelectorAll('rect')
    let doneCount = 0
    $rects.forEach(($el) => {
      const delay = +$el.getAttribute('data-delay')! * 1000
      $el.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 500,
        delay,
        composite: 'replace',
        fill: 'forwards',
      }).onfinish = (e) => {
        doneCount++
        if (doneCount === $rects.length) {
          done.current = true
        }
      }
    })
  }, [inView])
  return (
    <div className={clsx('inline-block', styles['root'])} ref={ref}>
      <svg height={height} width={width} ref={$ref}>
        <g>
          {range(0, day).map((i) => {
            return (
              <rect
                style={{ opacity: 0 }}
                data-delay={getRandomArbitrary(0.25, 0.75)}
                key={i}
                width="11"
                height="11"
                x={size * (i % rowCount) + gap * (i % rowCount)}
                y={
                  size * Math.floor(i / rowCount) +
                  gap * Math.floor(i / rowCount)
                }
                className="ContributionCalendar-day"
                rx="2"
                ry="2"
                data-count="7"
                data-date="2020-11-29"
                data-level={levelMatrix[i]}
              ></rect>
            )
          })}
        </g>
      </svg>
    </div>
  )
}
