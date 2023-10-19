import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { BotonAlimento, ContenedorBase, ContenedorBtnAlimento } from '../Elementos/ElementosBase';
import { useNavigate } from 'react-router-dom';
import EmparedadoIcon from '../Img/CroissantIcon.png'
import SnaksIcon from '../Img/DedosQuesoIcon.png'
import EnsaladaIcon from '../Img/LechugaIcon.png'
import '../css/Fondos.css'

const Comida = () => {

    const navegar = useNavigate();

    return ( 
        <>
            <HelmetProvider>

                <Helmet> Comida </Helmet>

            </HelmetProvider>

            <h1 className='Titulos'>Comida</h1>

            <ContenedorBase>

                <ContenedorBtnAlimento>

                    <BotonAlimento onClick={() => navegar('/Emparedados')}><img src={EmparedadoIcon} className='AlimetoIcon'/></BotonAlimento>
                    <h2>Emparedados</h2>x

                </ContenedorBtnAlimento>

                <ContenedorBtnAlimento>

                    <BotonAlimento onClick={() => navegar('/AlitasSnaks')}><img src={SnaksIcon} className='AlimetoIcon'/></BotonAlimento>
                    <h2>Alitas y Snaks</h2>

                </ContenedorBtnAlimento>

                <ContenedorBtnAlimento>

                    <BotonAlimento onClick={() => navegar('/Ensaladas')}><img src={EnsaladaIcon} className='AlimetoIcon'/></BotonAlimento>
                    <h2>Ensaladas</h2>

                </ContenedorBtnAlimento>

            </ContenedorBase>
        </>
     );
}
 
export default Comida;
