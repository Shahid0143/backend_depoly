import logo from './logo.svg';
import './App.css';
import {Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Post from './Components/Post';

function App() {
  return (
    <div className="App">
      <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>} />
      <Route path='/signup' element={<Signup/>}/>
      <Route path='/post' element={<Post/>}/>
    </Routes>
    </div>
  );
}

export default App;
