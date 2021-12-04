import clsx from 'clsx'
import React from 'react'
import styles from './index.module.css'

export const Part6: React.FC = () => {
  const mostUsedWordInCodeCount = 5
  const mostUsedWordInCode = 'class'
  const mostUsedWordInCommitLogCount = 10
  const mostUsedWordInCommitLog = 'chore'
  const otherUsedWordInCode = ['interface', 'function', 'const', 'let', 'var']
  const otherUsedWordInCommitLog = [
    'fix',
    'feat',
    'docs',
    'style',
    'refactor',
    'perf',
    'test',
    'chore',
  ]
  return (
    <section className={clsx('container', 'font-medium', styles['part6'])}>
      <div>
        {mostUsedWordInCodeCount > 0 && (
          <>
            <div className="text-3xl text-yellow-400">{mostUsedWordInCode}</div>
            <p>
              这是我在代码中最常写到的单词，他出现了{' '}
              {mostUsedWordInCodeCount.toLocaleString()} 次。
            </p>
          </>
        )}
        {mostUsedWordInCommitLogCount > 0 && (
          <>
            <div className="text-3xl text-yellow-400">
              {mostUsedWordInCommitLog}
            </div>
            <p>
              这是我在代码中最常写到的单词，他出现了{' '}
              {mostUsedWordInCommitLogCount.toLocaleString()} 次。
            </p>
          </>
        )}
        <div className="gap"></div>
        <p>
          <span>代码里，这些词经常出现</span>
        </p>
        <div className="space-x-2 -mt-2">
          {otherUsedWordInCode.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </div>
        <div className="gap"></div>
        <p className="-mt-4">
          <span>提交记录里，这些词经常出现</span>
        </p>
        <div className="space-x-2 -mt-2">
          {otherUsedWordInCommitLog.map((word) => (
            <span key={word}>{word}</span>
          ))}
        </div>
        <div className="gap"></div>
        <p>我会写很多很多的单词，很多很多的句子。</p>
      </div>
    </section>
  )
}
