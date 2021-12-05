import clsx from 'clsx'
import React from 'react'
import QrCode from '../assets/qrcode.png'
import styles from './index.module.css'

export const Part10: React.FC = () => {
  return (
    <section className={clsx('container', styles['part10'], 'font-medium')}>
      <div className="justify-center items-center text-gray-400 dark:text-gray-500 text-center leading-6 text-sm">
        <img src={QrCode} alt="qrcode" className="h-[120px] m-auto" />

        <hr className="my-4 w-full" />

        <p>扫码开启你的专属年度代码提交报告</p>
        <p>Copyright © 2021 @Lakr233's Team. All Rights Reserved.</p>
      </div>
    </section>
  )
}
