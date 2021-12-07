import clsx from 'clsx'
import React from 'react'
import { CodeTiles } from '../components/code-tiles'
import { Container } from '../components/container'
import { BiGit } from '../components/icons/git'
import { useStore } from '../store'
import styles from './index.module.css'

export const Part2 = () => {
  const { data } = useStore()

  return (
    <Container className={clsx(styles['part2'], 'container')}>
      <div className="w-full space-x-6 flex items-center relative">
        <BiGit
          className={
            'absolute right-[2.2rem] top-[12px] text-[#E15B39] text-[46px]'
          }
        />
        <CodeTiles />
        <div className="flex-grow flex-shrink-0 pr-6">
          <span className="text-sm font-medium">
            2021 年<br />
          </span>
          <h2 className="font-medium text-3xl py-2">
            我和我的代码，还有这一年。
          </h2>
          <hr className="dark:text-gray$-dark text-gray$-light w-full opacity-30" />
          <p className="dark:text-gray$-dark text-sm py-2 font-medium text-gray$-light">
            校检码: <code>0x0c</code>
          </p>
        </div>
      </div>
    </Container>
  )
}
