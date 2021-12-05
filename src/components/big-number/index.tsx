import clsx from 'clsx'
import React, { useState } from 'react'
import { animated, config, useTransition } from 'react-spring'
import { getRandomArbitrary } from '../../utils'

interface BigNumberProps {
  num: number
  color?: string
  className?: string
}
const genRange = () => {
  const r = getRandomArbitrary(0, 0.75)
  return [r, r + 0.25] as const
}
export const BigNumber: React.FC<BigNumberProps> = (props) => {
  const [items] = useState(
    props.num
      .toLocaleString()
      .split('')
      .map((fig) => {
        const range = genRange()
        return {
          fig,
          op: {
            range,
            output: [0, 1],
          },
          trans: {
            range,
            output: [-40, 0],
            extrapolate: 'clamp',
          },
        }
      }),
  )

  const transitions = useTransition(items, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    delay: 200,
    config: config.molasses,
  })

  return (
    <span
      style={{ display: 'inline-block' }}
      className={clsx(
        props.color ?? 'text-blue-400',
        'text-3xl',
        props.className,
      )}
    >
      {transitions(({ opacity }, item) => (
        <animated.span
          style={{
            display: 'inline-block',
            opacity: opacity.to(item.op),
            transform: opacity
              // @ts-ignore
              .to(item.trans)
              .to((y) => `translate3d(0,${y}px,0)`),
          }}
        >
          {item.fig}
        </animated.span>
      ))}
    </span>
  )
}
