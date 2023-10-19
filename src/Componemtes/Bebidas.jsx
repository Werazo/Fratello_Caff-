import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BotonAlimento, ContenedorBase, ContenedorBtnAlimento } from '../Elementos/ElementosBase';
import { useNavigate } from 'react-router-dom';
import Calientes from '../Img/MatchaCaliente.png'
import Frias from '../Img/FriasIcon.png'
import '../css/Fondos.css'

const Bebidas = () => {

    const navegar = useNavigate();

    return ( 
        <>
            <HelmetProvider>

                <Helmet> Bebidas </Helmet>

            </HelmetProvider>

            <h1 className='Titulos'>Bebidas</h1>

            <ContenedorBase>

                <ContenedorBtnAlimento>

                    <BotonAlimento onClick={() => navegar('/BebidasFrias')}><img src={Frias} className='AlimetoIcon'/> </BotonAlimento>
                    <h2>Frias</h2>

                </ContenedorBtnAlimento>

                <ContenedorBtnAlimento>

                    <BotonAlimento onClick={() => navegar('/BebidasCalientes')}><img src={Calientes} className='AlimetoIcon'/></BotonAlimento>
                    <h2>Calientes</h2>

                </ContenedorBtnAlimento>

            </ContenedorBase>

        </>
     );
}
 
export default Bebidas;
