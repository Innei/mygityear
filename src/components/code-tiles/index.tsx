import React from 'react'

const size = 14
const width = 14 * size
const height = size * (364 / 14)
export const CodeTiles: React.FC = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  return (
    <div className="inline-block">
      <canvas height={height} width={width} ref={canvasRef}></canvas>
    </div>
  )
}
