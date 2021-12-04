import React, { FC, useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Background } from './components/background'
import './index.css'
const parts = import.meta.glob('./sections/*.tsx')

const App = document.getElementById('root')
const Root: FC = () => {
  const [FCGroup, setGroup] = React.useState<FC[]>([])
  useEffect(() => {
    ;(async () => {
      const modules = await Promise.all(
        Object.values(parts).map((promise) => promise()),
      )
      const fc = [] as any
      modules.forEach((mo) => {
        fc.push(Object.values(mo)[0])
      })
      setGroup(fc)
    })()
  }, [])
  return (
    <>
      <Background></Background>

      {FCGroup.map((fc) => React.createElement(fc, { key: fc.name }))}
    </>
  )
}
ReactDOM.render(<Root />, App)
