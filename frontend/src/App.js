import NavBar from './components/Navbar.jsx';
import Home from './pages/Home.jsx';
import Imagegen from './pages/Imagegen.jsx';
import Textgen from './pages/Textgen.jsx';
import Sidebar from './components/SidebarData.jsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';


function App() {
  return (
    <>
      
      <BrowserRouter >
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/imagegen" element={<Imagegen />} key="imagegen"/>
          <Route path="/textgen" element={<Textgen />} key="textgen"/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
