import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import SkillTest from './components/SkillTest';
import Internships from './components/Internships';
import SyllabAnalysis from './components/SyllabAnalysis';

function App() {
  return (
    <div className="App">
      <div className='nav'><Navbar /></div>
      <div><Sidebar /></div>
        <Routes>
          <Route path='Dashboard'   element={<Dashboard />} />
          <Route path='/'           element={<><SkillTest /><SyllabAnalysis /></>} />
          <Route path='Internships' element={<Internships />} />
        </Routes>   
    </div>


  );
}

export default App;

