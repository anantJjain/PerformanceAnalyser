import './App.css';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CenterGrid from './components/CenterGrid';
import LeftGrid from './components/LeftGrid';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Sidebar />
     <CenterGrid />
     <LeftGrid />
    </div>
  );
}

export default App;
