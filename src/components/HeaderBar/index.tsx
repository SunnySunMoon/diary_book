import React from 'react'
import './index.css'

interface CProps {
  mode?: string
}

export const HeaderBar: React.FC<CProps> = props => {
  const { mode = 'homepage' } = props
  return (
    <div className="head-bar">
      <div>HeaderBar mode: {mode}</div>
    </div>
  )
}
