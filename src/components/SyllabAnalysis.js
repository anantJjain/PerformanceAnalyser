import React from 'react'
import '../../src/styles.css'

function SyllabAnalysis() {
  return (
    <div className='SyllabAnalysis'>
      <div className='Syllabheader'>Syllabus wise Analysis</div>
      <p>HTML Tools,Forms,History</p>
      <progress value="80" max="100"></progress><span>80%</span>
      <p>Tags and References in HTML</p>
      <progress value="60" max="100"></progress><span>60%</span>
      <p>Tables and CSS Basics</p>
      <progress value="24" max="100"></progress><span>24%</span>
      <p>Forms</p>
      <progress value="96" max="100"></progress><span>96%</span>
      
      
      
     
      </div>
  )
}

export default SyllabAnalysis