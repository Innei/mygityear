import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { Background } from './components/background'
import { Part1 } from './sections/part1'
import { Part2 } from './sections/part2'
import './index.css'

const App = document.getElementById('root')
const Root: FC = () => {
  return (
    <>
      <Background></Background>
      <Part1 />
      <Part2 />
    </>
  )
}
ReactDOM.render(<Root />, App)
