import React from 'react'
import { TextEffect } from '../text-effect'

const mainTitleTextList = [
  '我和我的代码，还有这一年。',
  '剑指天下，秋收 [Offer]',
  '半夜奋笔疾码，云相伴，”乐“相随。',
  'git push --force # 🐶',
  'debugPrint("Hello World!")',
  'vivo mian() { }；',
]
export const Part1 = () => {
  return (
    <section>
      <div
        className="flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-sans
      text-3xl font-bold
      "
      >
        <TextEffect textArray={mainTitleTextList} repeat></TextEffect>
      </div>
    </section>
  )
}
