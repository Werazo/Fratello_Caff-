import React, { useEffect, useState } from 'react';
import { Alimento, ContenedorBase2 } from '../Elementos/ElementosBase';
import { db } from '../Firebase/firebaseConfig';
import { collection,onSnapshot} from 'firebase/firestore';
import '../css/Fondos.css'

 const BebidasCalientes = () => {
    const [cafe, cambiarCafe] = useState([])
    const [tisana, cambiarTisana] = useState([])
    const [otros, cambiarOtros] = useState([])

    //Cafes
    useEffect (() => {
        onSnapshot(
            collection(db, 'Café'),
            (snapshot) => {
                const arregloBebidas = snapshot.docs.map((documento) => {
                    return { ...documento.data(), id: documento.id}
                })
                console.log(arregloBebidas)

                return  cambiarCafe(arregloBebidas);

            }
        )
    }, [])

    //Tisanas
    useEffect (() => {
        onSnapshot(
            collection(db, 'TisanaFriaFrappe'),
            (snapshot) => {
                const arregloBebidas = snapshot.docs.map((documento) => {
                    return { ...documento.data(), id: documento.id}
                })
                    
                return  cambiarTisana(arregloBebidas);
    
                }
            )
        }, [])

    //otros
    useEffect (() => {
        onSnapshot(
            collection(db, 'OtrosCalientes'),
            (snapshot) => {
                const arregloBebidas = snapshot.docs.map((documento) => {
                    return { ...documento.data(), id: documento.id}
                })
                
                return  cambiarOtros(arregloBebidas);

            }
        )
    }, [])

    return (
        <>

            <ContenedorBase2 className='Calientes'>

                <h2>Bebidas Calientes</h2>

                <h3>Con Café</h3>

                    <ul>
                        {cafe.map((bebida) => (
                                            
                                            <Alimento 
                                                key={bebida.id}
                                                id = {bebida}
                                                nombre = {bebida.Nombre}>{bebida.Nombre}</Alimento>
                                    ))}
                    </ul>

                <h3>Tisanas</h3>

                    <ul>
                        {tisana.map((bebida) => (
                                            
                                            <Alimento 
                                                key={bebida.id}
                                                id = {bebida}
                                                nombre = {bebida.Nombre}>{bebida.Nombre}</Alimento>
                                    ))}
                    </ul>

                <h3>Otros</h3>

                    <ul>
                        {otros.map((bebida) => (
                                            
                                            <Alimento 
                                                key={bebida.id}
                                                id = {bebida}
                                                nombre = {bebida.Nombre}>{bebida.Nombre}</Alimento>
                                    ))}
                    </ul>

            </ContenedorBase2> 

        </>
    )
 }
  
 export default BebidasCalientes;