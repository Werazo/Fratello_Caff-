import React, { useEffect, useState } from 'react';
import { Alimento, ContenedorBase2 } from '../Elementos/ElementosBase';
import { db } from '../Firebase/firebaseConfig';
import { collection,onSnapshot} from 'firebase/firestore';
import '../css/Fondos.css'

 const Ensaladas = () => {

    const [ensalada, cambiarEnsalada] = useState([]);

    useEffect (() => {
        onSnapshot(
            collection(db, 'Ensaladas'),
            (snapshot) => {
                const arregloBebidas = snapshot.docs.map((documento) => {
                    return { ...documento.data(), id: documento.id}
                })
                console.log(arregloBebidas)

                return  cambiarEnsalada(arregloBebidas);

            }
        )
    }, [])

    return (
        <>
        
        <ContenedorBase2 className='Ensaladas'>

        <br/>                <br/>                <br/>                <br/>

            <h3>Ensaladas</h3>

                <ul>
                    {ensalada.map((e) => (
                                        
                                        <Alimento 
                                            key={e.id}
                                            id = {e}
                                            nombre = {e.Nombre}>{e.Nombre}</Alimento>
                                ))}
                </ul>
                <br/>                <br/>                <br/>                <br/>                <br/>                <br/>                <br/>
        </ContenedorBase2>
        
        </>
    );
 }
  
 export default Ensaladas;