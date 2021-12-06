import clsx from 'clsx'
import RcQueueAnim from 'rc-queue-anim'
import React from 'react'
import { BigNumber } from '../components/big-number'
import { Container } from '../components/container'
import styles from './index.module.css'

export const Part4: React.FC = () => {
  const mostUsedLanguage: string | undefined = 'typescript'
  const otherUsedLanguages = ['swift', 'java', 'c++']
  const howManyLine = 162111
  return (
    <Container className={clsx(styles['part4'], 'font-medium container')}>
      <RcQueueAnim type="bottom">
        <p key="1" className="text-3xl font-medium">
          {mostUsedLanguage ?? '我不知道你写了什么'}
        </p>

        <p className="mt-2" key="2">
          {mostUsedLanguage
            ? '这是我最常用的语言。'
            : '应该是太冷门了吧，数据库里找不到对应的语言。🥲'}
        </p>

        <div className="gap"></div>

        <p key="3">
          <span>
            在这一年里，我使用这门语言提交了{' '}
            <BigNumber
              className="text-3xl text-yellow-400"
              num={howManyLine}
            ></BigNumber>{' '}
            行代码。
          </span>

          <br />
          <span>他是我最好的伙伴。</span>
        </p>

        <div className="gap"></div>
        {otherUsedLanguages.length > 0 ? (
          <div className="leading-7" key="4">
            <p>在剩余的时光里，</p>
            <p>
              {otherUsedLanguages.map((l) => (
                <span className="text-3xl text-purple-400" key={l}>
                  {l}{' '}
                </span>
              ))}
            </p>
            <p>他们也陪我走过一段旅程。</p>
          </div>
        ) : (
          <div key="4">
            <p>我很专一，没有使用过其他的语言。</p>
          </div>
        )}

        {otherUsedLanguages.length > 6 && (
          <>
            <div className="gap"></div>
            <p key="5">语言大师的称号，非你莫属！</p>
          </>
        )}
      </RcQueueAnim>
    </Container>
  )
}
