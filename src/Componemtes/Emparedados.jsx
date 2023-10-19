import React, { useEffect, useState } from 'react';
import { Alimento, ContenedorBase2 } from '../Elementos/ElementosBase';
import { db } from '../Firebase/firebaseConfig';
import { collection,onSnapshot} from 'firebase/firestore';
import '../css/Fondos.css'

 const Emparedados = () => {


   const [croissant, cambiarCroissant] = useState([]);
   const [hambuerguesa, cambiarHambuerguesa] = useState([]);
   const [club, cambiarClub] = useState([]);


   //Croissant y Baguette
   useEffect (() => {
       onSnapshot(
           collection(db, 'CroissantBaguette'),
           (snapshot) => {
               const arregloBebidas = snapshot.docs.map((documento) => {
                   return { ...documento.data(), id: documento.id}
               })
               console.log(arregloBebidas)

               return  cambiarCroissant(arregloBebidas);

           }
       )
   }, [])

   //Croissant y Baguette
   useEffect (() => {
      onSnapshot(
            collection(db, 'Hamburguesas'),
            (snapshot) => {
               const arregloBebidas = snapshot.docs.map((documento) => {
                  return { ...documento.data(), id: documento.id}
               })
  
               return  cambiarHambuerguesa(arregloBebidas);
  
            }
      )
   }, [])

   //Club Sandwich
   useEffect (() => {
      onSnapshot(
            collection(db, 'ClubSandwich'),
            (snapshot) => {
               const arregloBebidas = snapshot.docs.map((documento) => {
                  return { ...documento.data(), id: documento.id}
               })
  
               return  cambiarClub(arregloBebidas);
  
            }
      )
   }, [])

   return (
       <>
       
         <ContenedorBase2 className='Emparedados'>

            <h2>Emparedados</h2>

               <h3>Croissant y Baguette</h3>
               <ul>
                     {croissant.map((e) => (
                                       
                                       <Alimento 
                                             key={e.id}
                                             id = {e}
                                             nombre = {e.Nombre}>{e.Nombre}</Alimento>
                                 ))}
               </ul>

               <h3>Hambueguesas</h3>
               <ul>
                     {hambuerguesa.map((e) => (
                                       
                                       <Alimento 
                                             key={e.id}
                                             id = {e}
                                             nombre = {e.Nombre}>{e.Nombre}</Alimento>
                                 ))}
                                                <p>Puede ser de res o de pollo</p>
               </ul>

               <h3>Club Sandwich</h3>
               <ul>
                     {club.map((e) => (
                                       
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
  
 export default Emparedados;