import clsx from 'clsx'
import RcQueueAnim from 'rc-queue-anim'
import React from 'react'
import { BigNumber } from '../components/big-number'
import { Container } from '../components/container'
import styles from './index.module.css'

export const Part5: React.FC = () => {
  const commitDateInDay = '凌晨'
  const commitDateInDayCount = 11111
  const averageCommitPerDay = 122.111
  const averageCommitPerWeekday = 4.111
  const weekendCommitCount = 42
  return (
    <Container className={clsx('container', styles['part5'])}>
      <RcQueueAnim type="bottom" className="font-medium leading-9">
        <div key="1" className="text-3xl text-yellow-400">
          {commitDateInDay}
        </div>
        <p className="mt-2" key="2">
          我最喜欢在 {commitDateInDay}
          的时候提交代码，总共提交了 <BigNumber
            num={commitDateInDayCount}
          />{' '}
          次。
        </p>
        <p key="3">风雨兼程的 Coding 旅途，一天中我最忙碌的时段。</p>
        <div key="gap" className="gap"></div>

        <p key="4">
          平均而言，我一天提交代码{' '}
          <BigNumber
            num={averageCommitPerDay}
            className="text-3xl text-blue-500"
          ></BigNumber>{' '}
          次。
        </p>
        <p key="5">
          如果不计算周末的日子，则是{' '}
          <BigNumber
            num={averageCommitPerWeekday}
            className="text-3xl text-blue-500"
          ></BigNumber>{' '}
          次。
        </p>
        <p key="6">
          {(() => {
            if (averageCommitPerWeekday > 10) {
              return '我是卷王本王 🤪'
            } else if (averageCommitPerWeekday > 3) {
              return '辛苦啦 🥲'
            } else {
              return '是的，我又在摸鱼 🥺'
            }
          })()}
        </p>

        <div className="gap" key="gap-2"></div>

        <p key="7">
          有{' '}
          <BigNumber
            className="text-3xl text-blue-500"
            num={weekendCommitCount}
          ></BigNumber>{' '}
          个周末的日子，我在仓库留下了身影。
        </p>

        <div key="8">
          {weekendCommitCount > 0 ? (
            weekendCommitCount > 30 ? (
              <p>修得的福报，是我一生最大的欢喜。</p>
            ) : weekendCommitCount > 10 ? (
              <>可能敲代码，正是我的乐趣吧。</>
            ) : null
          ) : (
            <>
              <p>这一年的周末，我都没有提交代码。</p>
              <p>偷得浮生半日闲，可不能再修福报啦！</p>
            </>
          )}
        </div>
      </RcQueueAnim>
    </Container>
  )
}
