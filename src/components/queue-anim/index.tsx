import RcQueueAnim from 'rc-queue-anim'
import React, { useRef } from 'react'

export const QueueAnim: React.FC = (props) => {
  const index = useRef(0)
  const children = React.Children.map(props.children, (child) => {
    // @ts-ignore
    return React.cloneElement(child, { key: index.current++ })
  })
  return <RcQueueAnim type="bottom">{children}</RcQueueAnim>
}
