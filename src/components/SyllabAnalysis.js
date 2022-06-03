import React from 'react'
import '../../src/styles.css'

function SyllabAnalysis() {
  return (
    <div className='SyllabAnalysis'>
      <div className='Syllabheader'>Syllabus wise Analysis</div>
      <progress value="80" max="100"><span>80%</span></progress>
      <progress value="60" max="100"><span>60%</span></progress>
      <progress value="24" max="100"><span>24%</span></progress>
      <progress value="96" max="100"><span>96%</span></progress>
      <p>HTML Tools,Forms,History</p>
      <p>Tags and References in HTML</p>
      <p>Tables and CSS Basics</p>
      <p>Forms</p>
      </div>
  )
}

export default SyllabAnalysis