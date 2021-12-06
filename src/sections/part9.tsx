import clsx from 'clsx'
import React from 'react'
import { Container } from '../components/container'
import { QueueAnim } from '../components/queue-anim'
import styles from './index.module.css'

export const Part9: React.FC = () => {
  const badgeElements: { name: string; describe: string }[] = [
    { name: '我不知道你来噶什么', describe: '挺奇怪的' },
  ]
  return (
    <Container className={clsx('container', styles['part9'], 'font-medium')}>
      <QueueAnim>
        <div className="text-3xl text-green-400">成就墙</div>
        <div className="gap"></div>
        <p>今年，我获得了不少成就。下面是我愿意和你分享的一些。</p>
        <div className="gap"></div>

        <ul className="list-disc leading-6">
          {badgeElements.map((item, index) => (
            <li key={index}>
              <p>{item.name}</p>
              <small className="text-[12px] text-gray-400 dark:text-gray-500 ">
                {item.describe}
              </small>
            </li>
          ))}
        </ul>
      </QueueAnim>
    </Container>
  )
}
