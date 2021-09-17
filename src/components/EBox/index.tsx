import React from 'react'
import './index.css'

interface CProps {
  type: string
}

export const EBox: React.FC<CProps> = props => {
  const { type } = props
  return <div className="e-box"></div>
}
