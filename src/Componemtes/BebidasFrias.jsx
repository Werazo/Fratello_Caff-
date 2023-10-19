import React, { useEffect, useState } from 'react';
import { Alimento, ContenedorBase2 } from '../Elementos/ElementosBase';
import { db } from '../Firebase/firebaseConfig';
import { collection,onSnapshot} from 'firebase/firestore';
import '../css/Fondos.css'

 const BebidasFrias = () => {
    

    const [frappe, cambiarFrappe] = useState([])
    const [limonada, cambiarLimonada] = useState([])
    const [smoothies, cambiarSmoothies] = useState([])
    const [tisana, cambiarTisana] = useState([])
    const [otros, cambiarOtros] = useState([])

    //Frappes
    useEffect (() => {
        onSnapshot(
            collection(db, 'Frappes'),
            (snapshot) => {
                const arregloBebidas = snapshot.docs.map((documento) => {
                    return { ...documento.data(), id: documento.id}
                })
                console.log(arregloBebidas)

                return  cambiarFrappe(arregloBebidas);

            }
        )
    }, [])

    //Limonadas
    useEffect (() => {
        onSnapshot(
            collection(db, 'Limonadas'),
            (snapshot) => {
                const arregloBebidas = snapshot.docs.map((documento) => {
                    return { ...documento.data(), id: documento.id}
                })

                return  cambiarLimonada(arregloBebidas);

            }
        )
    }, [])

    //Smoothies
    useEffect (() => {
        onSnapshot(
            collection(db, 'Smoothies'),
            (snapshot) => {
                const arregloBebidas = snapshot.docs.map((documento) => {
                    return { ...documento.data(), id: documento.id}
                })
                    
                return  cambiarSmoothies(arregloBebidas);
    
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
            collection(db, 'OtrosFrios'),
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

            <ContenedorBase2 className='Frias'>

                <h2>Bebidas Frias</h2>

                <h3>Frappes</h3>

                    <ul>
                        {frappe.map((bebida) => (
                                            
                                            <Alimento 
                                                key={bebida.id}
                                                id = {bebida}
                                                nombre = {bebida.Nombre}>{bebida.Nombre}</Alimento>
                                    ))}
                    </ul>

                <h3>Limonadas y sodas Italianas</h3>

                    <ul>
                        {limonada.map((bebida) => (
                                            
                                            <Alimento 
                                                key={bebida.id}
                                                id = {bebida}
                                                nombre = {bebida.Nombre}>{bebida.Nombre}</Alimento>
                                    ))}
                    </ul>

                <h3>Smoothies</h3>

                    <ul>
                        {smoothies.map((bebida) => (
                                            
                                            <Alimento 
                                                key={bebida.id}
                                                id = {bebida}
                                                nombre = {bebida.Nombre}>{bebida.Nombre}</Alimento>
                                    ))}
                    </ul>


                <h3>Tisanas Frias y Frappe</h3>

                    <ul>
                        {tisana.map((bebida) => (
                                            
                                            <Alimento 
                                                key={bebida.id}
                                                id = {bebida}
                                                nombre = {bebida.Nombre}>{bebida.Nombre}</Alimento>
                                    ))}
                    </ul>

                <h3>Cafés frios y Otros</h3>

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

  
 export default BebidasFrias;