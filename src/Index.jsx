import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Bebidas from './Componemtes/Bebidas.jsx';
import BebidasFrias from './Componemtes/BebidasFrias.jsx';
import BebidasCalientes from './Componemtes/BebidasCalientes.jsx';
import Comida from './Componemtes/Comida.jsx';
import Ensaladas from './Componemtes/Ensaladas.jsx';
import Emparedados from './Componemtes/Emparedados.jsx';
import AlitasSnaks from './Componemtes/AlitasSnaks.jsx';
import Postres from './Componemtes/Postres.jsx';
import Menu from './Componemtes/Menu.jsx';
import Home from './Componemtes/Home.jsx'
import SobreNosotros from './Componemtes/SobreNosotros.jsx';
import WebFont from 'webfontloader';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

WebFont.load({
  google: {
    families: ['Raleway: 400, 500, 700', 'sans-serif']
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <BrowserRouter>
      <div>
        
        <Routes>

        <Route path='/Bebidas' element={<Bebidas/>}/>
          <Route path='/BebidasFrias' element={<BebidasFrias/>}/>
          <Route path='/BebidasCalientes' element={<BebidasCalientes/>}/>
          
        <Route path='/Comida' element={<Comida/>}/>
          <Route path='/Emparedados' element={<Emparedados/>}/>
          <Route path='/AlitasSnaks' element={<AlitasSnaks/>}/>
          <Route path='/Ensaladas' element={<Ensaladas/>}/>

        <Route path='/Postres' element={<Postres/>}/>
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/SobreNosotros' element={<SobreNosotros/>}/>
        <Route path='/' element={<Home/>}/>

        </Routes>

      </div>
      <App />
    </BrowserRouter>

  </React.StrictMode>,
)
