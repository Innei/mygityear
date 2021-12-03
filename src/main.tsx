import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { Background } from './components/background'
import { Part1 } from './sections/part1'
import { Part2 } from './sections/part2'
import './index.css'
import { Part3 } from './sections/part3'

const App = document.getElementById('root')
const Root: FC = () => {
  return (
    <>
      <Background></Background>
      <Part1 />
      <Part2 />
      <Part3 />
    </>
  )
}
ReactDOM.render(<Root />, App)
