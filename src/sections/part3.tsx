import clsx from 'clsx'
import RcQueueAnim from 'rc-queue-anim'
import React, { useMemo } from 'react'
import { BigNumber } from '../components/big-number'
import { Container } from '../components/container'
import styles from './index.module.css'

export const Part3: React.FC = () => {
  const year = 2021
  const keyword = '我也不知道你来这里干什么'
  const totalCommit = 0
  const totalCommitDay = 1
  const add = 0
  const minus = 0
  const activeDay = 0

  const makeSummaryView = useMemo(() => {
    if (totalCommit < 0) {
      return (
        <>
          <p>
            回过头来看看这一年，咱一共活跃了 {makeBigNumber(totalCommitDay)}
            天。
          </p>
          <p>黑客是我的外号，我总能找到属于我的 🚩! 是 🏳️‍⚧️ 还是 🏳️‍🌈 呢？</p>
        </>
      )
    } else if (totalCommit > 100) {
      return (
        <>
          <p>这一年，咱一共卷了 {makeBigNumber(totalCommitDay)} 天。</p>
          <p>风雨兼程，目的地是我向往的星辰大海。🥺</p>
        </>
      )
    } else if (totalCommit > 365) {
      return (
        <>
          <p>
            回过头来看看这一年，似乎付出了不少。咱一共活跃了{' '}
            {makeBigNumber(totalCommitDay)} 天。
          </p>
          <p>如果说代码是有温度的字符，那仓库便是咱的小太阳～ 🤫</p>
        </>
      )
    } else if (totalCommit > 50) {
      return (
        <>
          <p>
            回过头来看看这一年，咱一共活跃了 {makeBigNumber(totalCommitDay)}
            天。
          </p>
          <p>星星有月亮，代码回家有仓库，而你我我相伴。😛</p>
        </>
      )
    } else {
      return (
        <>
          <p>
            回过头来看看这一年，咱一共活跃了 {makeBigNumber(totalCommitDay)}{' '}
            天。
          </p>
          <p>他们说多少不重要，因为我的提交，每一次都心意满满。😮</p>
        </>
      )
    }
  }, [totalCommit, totalCommitDay])
  return (
    <Container className={clsx('container', styles['part3'])}>
      <RcQueueAnim type="bottom" className="font-medium leading-6">
        <small className="text-sm" key="1">
          在 {year} 年
        </small>
        <br />
        <div key="2" className="keyword inline-block text-3xl pt-2">
          {keyword}
        </div>
        <span key="3" className="text-base">
          {' '}
          是我今年的代言词。
        </span>
        <br />

        <div className="gap"></div>

        <p key="4" className="leading-10">
          这一年里, 我总共进行了 {makeBigNumber(totalCommit)} 次代码提交。
        </p>

        <p key="5">感谢我的仓库们，他们记录着我生活的点点滴滴。</p>

        <div className="gap"></div>

        <p key="6">提交记录告诉咱：</p>
        <p key="7" className="pt-4">
          仓库因你增添了{' '}
          <BigNumber className="text-green-500" num={add}></BigNumber>{' '}
          行代码，也减去了{' '}
          <BigNumber className={'text-red-600'} num={minus}></BigNumber>{' '}
          行的重量。
        </p>
        <div className="gap"></div>
        <div key="8">{makeSummaryView}</div>
      </RcQueueAnim>
    </Container>
  )
}

const makeBigNumber = (num: number) => {
  return <BigNumber num={num}></BigNumber>
}
