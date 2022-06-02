import React from 'react'
import QuesAnalysis from './QuesAnalysis'
import SyllabAnalysis from './SyllabAnalysis'

function LeftGrid() {
  return (
    <div className='LeftGrid'>
      <SyllabAnalysis />
      <QuesAnalysis />
    </div>
  )
}

export default LeftGrid