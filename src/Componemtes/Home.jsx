import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContenedorPromocional_1, ContenedorPromocional_2, ContenedorPromocional_3, Texto } from '../Elementos/ElementosBase';
import MatchaPromo from '../Img/MatchaPromocional.png'
import CafeFrioPromo from '../Img/CafeFrio--.png'
import CroissantPromo from '../Img/CroissantPromo.png'
import '../css/Fondos.css'

const Home = () => {
    return ( 
        <>

        <HelmetProvider>

             <Helmet> Home </Helmet>

        </HelmetProvider>

        <ContenedorPromocional_1 className='FondoPromo_1'>

               <Texto>
                         <h2>- Café Frio -</h2>
                         <h3>¡No te quedes Esperando!</h3>
               </Texto>
               <img src={CafeFrioPromo} className='Promocional'/>

        </ContenedorPromocional_1>

        <ContenedorPromocional_2 className='FondoPromo_2'>

          <img src={MatchaPromo} className='Promocional'/>
               <Texto>
                    <h2>Mucho Matcha</h2>
                    <h3>¡Pídelo Caliente, Helado o Frappuccino!</h3>
               </Texto>

        </ContenedorPromocional_2>

        <ContenedorPromocional_3 className='FondoPromo_3'>

               <Texto>
                    <h2>Croissant</h2>
                    <h4>¡Pídelo de Pollo, Jamón de Pierna o Jamón de Pavo!</h4>
               </Texto>
          <img src={CroissantPromo} className='Promocional'/>

        </ContenedorPromocional_3>

        </>
     );
}
 
export default Home;