import clsx from 'clsx'
import RcQueueAnim from 'rc-queue-anim'
import { OverPack } from 'rc-scroll-anim'
import TweenOne from 'rc-tween-one'
import React from 'react'
import styles from './index.module.css'

export const Container: React.FC<JSX.IntrinsicElements['section']> = (
  props,
) => {
  const { className, ...rest } = props

  return (
    <OverPack>
      <TweenOne
        animation={{ y: 0, opacity: 1 }}
        style={{ transform: 'translateY(100px)', opacity: 0 }}
      >
        <RcQueueAnim type={'bottom'}>
          <section
            className={clsx('container font-medium', styles['root'], className)}
            {...rest}
          >
            {props.children}
          </section>
        </RcQueueAnim>
      </TweenOne>
    </OverPack>
  )
}
