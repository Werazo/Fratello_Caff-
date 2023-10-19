import { styled } from "styled-components";

const Svg = styled.svg`
height: 50vh;
width: 100%;
position: fixed;
bottom: 0;
z-index: -1;
path {
    fill: rgb(215, 215, 215);
}
`;

const Fondo = () => {

    return ( 
        <>                                {/*preserveAspectRatio="none" es para que la onda no tenga espacio en blanco debajp de ella */}
            <Svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none">
                <path fill-opacity="1" d="M0,160L80,170.7C160,181,320,203,480,208C640,213,800,203,960,165.3C1120,128,1280,64,1360,32L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
            </Svg>
        </>
     );
}
 
export {Fondo};