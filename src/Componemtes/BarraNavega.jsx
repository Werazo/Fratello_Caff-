import React from 'react';
import { Barra, Btn, BtnLink, Logo, ContenedorBtns, ContenedorLogo } from '../Elementos/BarraSuperior';
import { useNavigate } from 'react-router-dom';
import logoFratello from '../Img/Logo2.png'

const BarraNavega = () => {

    const navegar = useNavigate();

    return ( 
        <>
        <Barra>
            <ContenedorBtns>
                <Btn>
                    <BtnLink onClick={() => navegar('/')}><h4>Home</h4></BtnLink>
                </Btn>

                <Btn>
                    <BtnLink  onClick={() => navegar('/Menu')}><h4>Menu</h4></BtnLink>
                </Btn>

                <Btn>
                    <BtnLink onClick={() => navegar('/SobreNosotros')} ><h4> Nosotros</h4></BtnLink>
                </Btn>
            </ContenedorBtns>

            <ContenedorLogo>
                <Logo src={logoFratello}/>
            </ContenedorLogo>

        </Barra>
        </>
        
     );
}
 
export default BarraNavega;