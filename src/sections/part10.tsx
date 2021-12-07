import clsx from 'clsx'
import RcQueueAnim from 'rc-queue-anim'
import React from 'react'
import QrCode from '../assets/qrcode.png'
import { Container } from '../components/container'
import styles from './index.module.css'

export const Part10: React.FC = () => {
  return (
    <section className={clsx(styles['container'], 'container')}>
      <div
        className="justify-center items-center text-gray-400 dark:text-gray-500 text-center leading-6 text-sm"
        key="final"
      >
        <a
          href="https://github.com/Co2333/myyearwithgit"
          rel="noreferrer"
          target="_blank"
        >
          <img src={QrCode} alt="qrcode" className="h-[120px] m-auto" />
        </a>

        <hr className="my-4 w-full" />

        <p>扫码开启你的专属年度代码提交报告</p>
        <p>Copyright © 2021 @Lakr233's Team. All Rights Reserved.</p>
      </div>
    </section>
  )
}
