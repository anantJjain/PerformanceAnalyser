import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
// import CenterGrid from './components/CenterGrid';
import LeftGrid from './components/LeftGrid';
import SkillTest from './components/SkillTest';

function App() {
  return (
    <div className="App">
      <div className='nav'><Navbar /></div>
      <div className='Container'>
        <div><Sidebar /></div>
        <div><SkillTest /></div>
        <div><LeftGrid /></div>
      </div>
      {/* <div className='Conatiner'>
        <div><Sidebar /></div>
        <div><SkillTest /></div>
        <div><LeftGrid /></div>
      </div> */}
    </div>
  );
}

export default App;
