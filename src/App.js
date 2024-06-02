import{ React } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header/Header';

import Main from './pages/Main/Main';
import Reviews from './pages/Reviews/Reviews';
import Specialists from './pages/Specialists/Specialists';
import Registr from './pages/Registr/Registr';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path='/' element={<Main />}/>
          <Route path='/Reviews' element={<Reviews/>}/>
          <Route path='/Specialists' element={<Specialists/>}/>
          <Route path='/Registr' element={<Registr/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
