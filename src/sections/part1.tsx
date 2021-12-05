import clsx from 'clsx'
import { shuffle } from 'lodash-es'
import React from 'react'
import { IcBaselineKeyboardArrowDown } from '../components/icons/arrow-down'
import { TextEffect } from '../components/text-effect'
import styles from './index.module.css'

const mainTitleTextList = ['我和我的代码，还有这一年。'].concat(
  shuffle([
    '剑指天下，秋收 [Offer]',
    '半夜奋笔疾码，云相伴，”乐“相随。',
    'git push --force # 🐶',
    'debugPrint("Hello World!")',
    'vivo mian() { }；',
    '0.2 + 0.1 // 0.30000000000000004',
    'ReferenceError: girlfriend is not defined',
  ]),
)
export const Part1 = () => {
  return (
    <section className={styles['part1']}>
      <div
        className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-mono
      text-3xl font-bold
      "
      >
        <TextEffect
          className="break-all"
          textArray={mainTitleTextList}
          repeat
          // pause={import.meta.env.DEV}
        ></TextEffect>
      </div>

      <div
        className={clsx(
          'absolute left-1/2 -translate-x-1/2 top-[80vh] text-xl',
        )}
      >
        <IcBaselineKeyboardArrowDown className={styles['arrow-down']} />
      </div>
    </section>
  )
}
