import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ContenedorBase, ContenedorBase2, Parrafo, BotonRedSocial } from '../Elementos/ElementosBase';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import Facebook from '../Img/facebook.svg'
import Instagram from '../Img/instagram.svg'
import '../css/Fondos.css'

const SobreNosotros = () => {
    const {isLoaded} = useLoadScript({googleMapsApiKey: import.meta.env.VITE_NEXT_PUBLIC_GOOGLE_MAPS_YOUR_API_KEY})

    if (!isLoaded) return <>
            <h4>Loading ...</h4>
        </>;

    return <Mapa/>
}

const Mapa = () => {
    return ( 
        <>
            <div className='FondoNosotros'> 
                <HelmetProvider>
                    <Helmet> Nosotros </Helmet>
                </HelmetProvider>

                <ContenedorBase className='Nosotros'>
                    <h1>Nosotros</h1>
                    <Parrafo>
                        Nosotros somos Fratello Café, un lugar cafetero que ha estado vigente desde 2011. 
                        Con más de una década de experiencia, seguimos sirviendo deliciosos cafés y creando momentos memorables. 
                        ¡Te esperamos con una taza de café!
                    </Parrafo>

                </ContenedorBase>


                <div className='Mapa-RedSocial'>
                    <GoogleMap 
                            zoom={10}
                            center={{lat: 21.680463, lng: -102.587872}}
                            mapContainerClassName='Mapa'>

                        <Marker position={{lat: 21.680463, lng: -102.587872}}/>

                    </GoogleMap>

                    <div className='ContBotonRedSocial'>
                        <BotonRedSocial 
                            href='https://www.facebook.com/fratellocaffevhj/photos' 
                            target="_blank" 
                            className='BotonRedSocial'>

                            <img src={Facebook}/>
                        </BotonRedSocial>

                        <BotonRedSocial 
                            href='https://www.instagram.com/fratellocaffevh/' 
                            target="_blank" 
                            className='BotonRedSocial'>
                    
                            <img src={Instagram}/>
                        </BotonRedSocial>
                    </div>

                </div>

            </div>

        </>
     );
}

export default SobreNosotros;
