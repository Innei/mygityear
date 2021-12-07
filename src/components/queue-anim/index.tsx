import RcQueueAnim from 'rc-queue-anim'
import React, { useRef } from 'react'

export const QueueAnim: React.FC<JSX.IntrinsicElements['div']> = (props) => {
  const index = useRef(0)
  const children = React.Children.map(props.children, (child) => {
    // @ts-ignore
    return child && React.cloneElement(child, { key: index.current++ })
  })
  const { className, ...rest } = props
  return (
    <RcQueueAnim type="bottom" forcedReplay leaveReverse className={className}>
      {children}
    </RcQueueAnim>
  )
}
