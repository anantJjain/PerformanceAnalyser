import React from 'react'
import '../../src/styles.css'

function SyllabAnalysis() {
  return (
    <div className='SyllabAnalysis'>
      <div className='Syllabheader'>Syllabus wise Analysis</div>
      <p className='testTags'>HTML Tools,Forms,History</p>
      <progress className='HTML' value="80" max="100"></progress><span>80%</span>
      <p className='testTags'>Tags and References in HTML</p>
      <progress className='TAGS' value="60" max="100"></progress><span>60%</span>
      <p className='testTags'>Tables and CSS Basics</p>
      <progress className='TABLES' value="24" max="100"></progress><span>24%</span>
      <p className='testTags'>Forms</p>
      <progress className='FORMS' value="96" max="100"></progress><span>96%</span>
      
      
      
     
      </div>
  )
}

export default SyllabAnalysis