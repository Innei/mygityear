import React, { FC } from 'react'
import ReactDOM from 'react-dom'
import { Background } from './components/background'
import './index.css'

const App = document.getElementById('root')
const Root: FC = () => {
  return (
    <>
      <Background></Background>
    </>
  )
}
ReactDOM.render(<Root />, App)
