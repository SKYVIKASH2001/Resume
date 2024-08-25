import React from 'react';
import Home from '../src/Components/Home';
import Login from'../src/Components/Login';
import Navbar from '../src/Components/Navbar';
import Signup from '../src/Components/Signup';
import Template from '../src/Components/Template';
import Notfound from'../src/Components/Notfound';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './Components/About';

function App(props) {
  return (
    <>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path={'/'}element={<Home/>}></Route>
        <Route path={'/about'}element={<About/>}></Route>
        <Route path="/login"element={<Login/>}></Route>
        <Route path="/signup"element={<Signup/>}></Route>
        <Route path={'/template'}element={<Template/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
      </Routes>
      </BrowserRouter>



    </>
  );
}

export default App;