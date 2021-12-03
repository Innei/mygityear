import clsx from 'clsx'
import { range } from 'lodash-es'
import React from 'react'
import styles from './index.module.css'

const size = 10
const gap = 5
const day = 364
const rowCount = 14
const width = rowCount * size + (rowCount - 1) * gap
const height = size * (day / rowCount) + (day / rowCount - 1) * gap
export const CodeTiles: React.FC = () => {
  return (
    <div className={clsx('inline-block', styles['root'])}>
      <svg height={height} width={width}>
        <g>
          {range(0, day).map((i) => {
            return (
              <rect
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
                data-level={Math.floor(Math.random() * 3)}
              ></rect>
            )
          })}
        </g>
      </svg>
    </div>
  )
}
