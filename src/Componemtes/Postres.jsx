import React, { useEffect, useState } from 'react';
import { Alimento, ContenedorBase2 } from '../Elementos/ElementosBase';
import { db } from '../Firebase/firebaseConfig';
import { collection,onSnapshot} from 'firebase/firestore';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import '../css/Fondos.css'

const Postres = () => {

    const [pay, cambiarPay] = useState([]);
    const [crepas, cambiarCrepas] = useState([]);
    const [waffle, cambiarWaffle] = useState([]);

       //Pay
        useEffect (() => {
            onSnapshot(
                collection(db, 'Pay'),
                (snapshot) => {
                    const arregloBebidas = snapshot.docs.map((documento) => {
                        return { ...documento.data(), id: documento.id}
                    })
                    console.log(arregloBebidas)

                    return  cambiarPay(arregloBebidas);

            }
        )
    }, [])

        //Crepas
        useEffect (() => {
        onSnapshot(
                collection(db, 'Crepas'),
                (snapshot) => {
                    const arregloBebidas = snapshot.docs.map((documento) => {
                        return { ...documento.data(), id: documento.id}
                    })
                    console.log(arregloBebidas)

                    return  cambiarCrepas(arregloBebidas);

            }
        )
    }, [])

        //Waffles
        useEffect (() => {
            onSnapshot(
                    collection(db, 'Waffle'),
                    (snapshot) => {
                        const arregloBebidas = snapshot.docs.map((documento) => {
                            return { ...documento.data(), id: documento.id}
                        })
                        console.log(arregloBebidas)
        
                        return  cambiarWaffle(arregloBebidas);
        
                }
            )
        }, [])

    return ( 
        <>
            <HelmetProvider>

                <Helmet> Postres </Helmet>

            </HelmetProvider>

            <ContenedorBase2 className='Postres'>

            <h2 >Postres</h2>

                <h3>Pay de queso</h3>
                    <ul>
                     {pay.map((e) => (
                                       
                                       <Alimento 
                                             key={e.id}
                                             id = {e}
                                             nombre = {e.Nombre}>{e.Nombre}</Alimento>
                                 ))}
                    </ul>

                <h3>Crepas</h3>
                    <ul>
                     {crepas.map((e) => (
                                       
                                       <Alimento 
                                             key={e.id}
                                             id = {e}
                                             nombre = {e.Nombre}>{e.Nombre}</Alimento>
                                 ))}
                    </ul>

                <h3>Waffles</h3>
                    <ul>
                     {waffle.map((e) => (
                                       
                                       <Alimento 
                                             key={e.id}
                                             id = {e}
                                             nombre = {e.Nombre}>{e.Nombre}</Alimento>
                                 ))}
                    </ul>
            </ContenedorBase2>
        </>
     );
}
 
export default Postres;
