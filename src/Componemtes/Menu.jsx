import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContenedorPromocional_1, ContenedorPromocional_2, ContenedorPromocional_3, Boton } from '../Elementos/ElementosBase';
import { useNavigate } from 'react-router-dom';
import '../css/Fondos.css'

const Menu = () => {

    const navegar = useNavigate();

    return ( 
        <>
            <HelmetProvider>

                <Helmet> Menu </Helmet>

            </HelmetProvider>

            <ContenedorPromocional_1 id='FondoBebida'>

                <div className='ContBotonComidas'>
                
                    <h1>Bebidas</h1>
                    <Boton onClick={() => navegar('/Bebidas')}>Ver</Boton>

                </div>

            </ContenedorPromocional_1>

            <ContenedorPromocional_2 id='FondoComida'>

                <div className='ContBotonComidas'>
                    
                    <h1>Comida</h1>
                    <Boton onClick={() => navegar('/Comida')}>Ver</Boton>

                </div>

            </ContenedorPromocional_2>

            <ContenedorPromocional_3 id='FondoPostre'>

                <div className='ContBotonComidas'>
                
                    <h1>Postres</h1>
                    <Boton onClick={() => navegar('/Postres')}>Ver</Boton>

                </div>
                
            </ContenedorPromocional_3>
        </>
     );
}
 
export default Menu;
