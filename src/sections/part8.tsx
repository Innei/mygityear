import clsx from 'clsx'
import React from 'react'
import styles from './index.module.css'
import * as WeatherIcons from '../components/icons/weather'
import { Container } from '../components/container'
import { BigNumber } from '../components/big-number'

export const Part8: React.FC = () => {
  const specialMonth = 1
  const specialDay = 1
  const specialCount = 10
  return (
    <Container className={clsx('container', styles['part8'], 'font-medium')}>
      <div>
        <div>
          <span className="text-3xl text-purple-400">{specialMonth}</span> 月{' '}
          <span className="text-3xl text-purple-400">{specialDay}</span> 日
        </div>
        <p>大概是很特别的一天。</p>
        <div className="gap"></div>

        <div className="flex items-center space-x-2 text-xl">
          {Object.values(WeatherIcons).map((icon) =>
            React.createElement(icon, { key: icon.name }),
          )}
        </div>
        <div className="gap"></div>
        <p>
          在这短短的一天里，你一共提交了{' '}
          <BigNumber
            className="text-3xl text-yellow-400"
            num={specialCount}
          ></BigNumber>{' '}
          次代码。
        </p>
      </div>
    </Container>
  )
}
