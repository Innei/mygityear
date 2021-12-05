import clsx from 'clsx'
import React from 'react'
import styles from './index.module.css'

export const Part7: React.FC = () => {
  const emptyLineCount = 33333
  return (
    <section className={clsx(styles['part7'], 'container font-medium')}>
      <div>
        <div>
          <span className="text-3xl text-red-500">{emptyLineCount}</span> 行
        </div>
        <p>
          这是我今年写的空行的数量。空行，没错，就是只有空格或者什么都没有的那一行。
        </p>

        <div className="gap"></div>
        <p className="whitespace-pre-line">
          {(() => {
            if (emptyLineCount < 1) {
              return '我从来不摸鱼，因为没有鱼给我摸。🐟'
            } else if (emptyLineCount < 1000) {
              return '空行能让我的代码变得好看，我很喜欢。\n我想你也会很喜欢的，我如此说道，我如此和你说道。 '
            } else if (emptyLineCount < 233_333) {
              return '人们说色即是空，空即是色。\n我着实不能理解其中的含义。'
            } else {
              return '天啦噜！我的摸鱼流量超过了 100TB 呢！\n这相当于好几百只 🐳🐳🐳🐳🐳🐳 从我身边游过'
            }
          })()}
        </p>
      </div>
    </section>
  )
}
