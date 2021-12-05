import clsx from 'clsx'
import RcQueueAnim from 'rc-queue-anim'
import ScrollOverPack from 'rc-scroll-anim/lib/ScrollOverPack'
import TweenOne from 'rc-tween-one'
import React from 'react'
import styles from './index.module.css'

export const Container: React.FC<JSX.IntrinsicElements['section']> = (
  props,
) => {
  const { className, ...rest } = props

  return (
    <ScrollOverPack playScale={0.3}>
      <TweenOne
        animation={{ y: 0, opacity: 1 }}
        key={Math.random().toString(16).slice(2, 6)}
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
    </ScrollOverPack>
  )
}
