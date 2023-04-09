import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import SingUp from './page/singUp';
import Home from './page/Home';

ReactDOM.createRoot( document.getElementById( 'root' ) ).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* rutas */}
     <Routes>
      <Route path='/' element={ <App />}/>
      <Route path='/signUp' element={ <SingUp />}/>
      <Route path='/home' element={ <Home />}/>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
