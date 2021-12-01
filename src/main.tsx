import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { Background } from './components/background'
import { Part1 } from './components/sections/part1'
import './index.css'

const App = document.getElementById('root')
const Root: FC = () => {
  return (
    <>
      <Background></Background>
      <Part1 />
    </>
  )
}
ReactDOM.render(<Root />, App)
