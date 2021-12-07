/* eslint-disable @typescript-eslint/no-non-null-asserted-optional-chain */
import 'rc-texty/assets/index.css'
import React, { FC, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Background } from './components/background'
import './index.css'
import { StoreProvider } from './store'
const parts = import.meta.glob('./sections/*.tsx')

const App = document.getElementById('root')
const Root: FC = () => {
  const [FCGroup, setGroup] = React.useState<FC[]>([])
  useEffect(() => {
    ;(async () => {
      const modules = await Promise.all(
        Object.entries(parts)
          .sort(([a_name], [b_name]) => {
            const index = /part(\d+)\.tsx/

            return +a_name.match(index)![1]! - +b_name.match(index)![1]!
          })
          .map(([_, fc]) => fc()),
      )
      const fc = [] as any
      modules.forEach((mo) => {
        fc.push(Object.values(mo)[0])
      })
      setGroup(fc)
    })()
  }, [])
  return (
    <StoreProvider value={{}}>
      <Background></Background>

      {FCGroup.map((fc) => React.createElement<any>(fc, { key: fc.name }))}
    </StoreProvider>
  )
}
ReactDOM.render(<Root />, App)
