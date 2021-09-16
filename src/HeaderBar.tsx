import React from 'react'

interface CProps {
  mode?: string
}

export const HeaderBar: React.FC<CProps> = props => {
  const { mode = 'homepage' } = props
  return (
    <>
      <div>HeaderBar</div>
      <div>mode: {mode}</div>
    </>
  )
}
