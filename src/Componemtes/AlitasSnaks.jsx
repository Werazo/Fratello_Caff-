import React, { useEffect, useState } from 'react';
import { Alimento, ContenedorBase2 } from '../Elementos/ElementosBase';
import { db } from '../Firebase/firebaseConfig';
import { collection,onSnapshot} from 'firebase/firestore';
import '../css/Fondos.css'

 const AlitasSnaks = () => {
   

   const [alitas, cambiarAlitas] = useState([]);
   const [snaks, cambiarSnaks] = useState([]);


   //Alitas y Tiras
   useEffect (() => {
       onSnapshot(
           collection(db, 'AlitasTiras'),
           (snapshot) => {
               const arregloBebidas = snapshot.docs.map((documento) => {
                   return { ...documento.data(), id: documento.id}
               })
               console.log(arregloBebidas)

               return  cambiarAlitas(arregloBebidas);

           }
       )
   }, [])

   //Croissant y Baguette
   useEffect (() => {
      onSnapshot(
            collection(db, 'Snaks'),
            (snapshot) => {
               const arregloBebidas = snapshot.docs.map((documento) => {
                  return { ...documento.data(), id: documento.id}
               })
  
               return  cambiarSnaks(arregloBebidas);
  
            }
      )
   }, [])

   return (
       <>
       
         <ContenedorBase2 className='AlitasSnaks'>

            <h2>Alitas y Snaks</h2>

               <h3>Alitas y Tiras de pollo</h3>
               <ul>
                     {alitas.map((e) => (
                                       
                                       <Alimento 
                                             key={e.id}
                                             id = {e}
                                             nombre = {e.Nombre}>{e.Nombre}</Alimento>
                                 ))}
               </ul>

               <h3>Snaks</h3>
               <ul>
                     {snaks.map((e) => (
                                       
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
  
 export default AlitasSnaks;