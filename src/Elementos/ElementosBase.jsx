import { styled } from "styled-components";

const ContenedorPromocional_1 = styled.div`
grid-template-columns: repeat(2,1fr);
display: grid;
position: relative;
top: 8vw;
width: 100vw;
height: 68vh;
background-color: #db0a68;
color: white;
justify-content: space-around;
margin-bottom: 50px;
box-sizing: border-box;
flex-direction: column;
align-items: center;

@media(max-width: 60rem){ /* 950px */
display: flex;
    top: 12vh;
    width: 100vw;
    height: 100vh;
    flex-direction: column-reverse;
    align-items: center;
}
`;

const ContenedorPromocional_2 = styled.div`
grid-template-columns: repeat(2,1fr);
display: grid;
position: relative;
top: 8vw;
width: 100vw;
height: 68vh;
background-color: #107a46;
color: white;
justify-content: center;
margin-bottom: 50px;
box-sizing: border-box;
flex-direction: row;
align-items: center;

@media(max-width: 60rem){ /* 950px */
    display: flex;
    top: 12vh;
    width: 100vw;
    height: 100vh;
    flex-direction: column;
    align-items: center;
}
`;

const ContenedorPromocional_3 = styled.div`
grid-template-columns: repeat(2,1fr);
display: grid;
position: relative;
top: 8vw;
width: 100vw;
height: 68vh;
background-color: #093a34;
color: white;
justify-content: center;
margin-bottom: 50px;
box-sizing: border-box;
flex-direction: row;
align-items: center;

@media(max-width: 60rem){ /* 950px */
    display: flex;
    top: 12vh;
    width: 100vw;
    height: 100vh;
    flex-direction: column-reverse;
    align-items: center;
}
`;

const Boton = styled.button`
    display: inline;
    background: none;
    color: white;
    border: 1px solid;
    border-radius: 50px;
    border-color: white;
    padding: 7px 16px;
    font-weight: 600;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    width: 10vw;

    &:hover{
        background-color: white;
        color: #2143619f;
        transition: all .2s ease;
    }
    
    @media(max-width: 60rem){ /* 950px */
    max-width: 50%;
    width: auto;
    padding: none;

    & > * {
        width: 100%;
        margin-bottom: 0.62rem; /* 10px */
    }
}
`;

const BotonRedSocial = styled.a`
    display: inline;
    background: none;
    margin: 10px;
    border-radius: 100%;
    border-color: none;
    line-height: 1;
    text-align: center;
    text-decoration: none;
    width: 70px;
    height: 70px;
    
    &:hover{
        cursor: pointer;
    }
    
    @media(max-width: 60rem){ /* 950px */
    max-width: 50%;
    width: 50px;
    padding: none;
}
`;

const ContenedorBase = styled.div`
    display: flex;
    position: relative;
    width: 100vw;
    height: auto;
    font-size: 26px;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;

    @media(max-width: 60rem){ /* 950px */
        width: 100vw;
        flex-direction: column;
        font-size: 20px;
    }
`;

const ContenedorBase2 = styled.div`
    top: 140px;
    display: flex;
    font-size: 26px;
    position: relative;
    width: 100vw;
    height: auto;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;
    overflow-y: scroll;

    @media(max-width: 60rem){ /* 950px */
        width: 100vw;
        font-size: 20px;
        top: 55px;
    }
`;

const Parrafo = styled.p`
    display: flex;
    padding-right: 50px;
    padding-left: 30px;
    align-items: center;
    justify-content: space-between;

    @media(max-width: 60rem){ /* 950px */
        padding-left: 10px;
        padding-right: 10px;
    }
`;

const Texto = styled.div`
    font-size: 30px;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    text-align: center;
    
    @media(max-width: 65rem){/* 960px */
        font-size: 20px;
    }
`;

const BotonAlimento = styled.button`
    display: inline;
    position: relative;
    width: 300px;
    height: 300px;
    background-color:#172737;
    margin: 5px;
    padding:10px;
    -webkit-border-radius: 100%;
    -moz-border-radius: 100%;
    border-radius: 100%;
    font-size:11px;
    line-height:32px;
    text-transform: uppercase;
    float:left;
    justify-content: center;

    @media(max-width: 60rem){ /* 950px */
    width: 135px;
    height: 135px;
    padding: none;

    & > * {
        width: 100%;
        margin-bottom: 0.62rem; /* 10px */
    }
    }

    &:hover{
        opacity: 0.50;
        -moz-opacity: .50;
        filter: alpha (opacity=50);
        transition: all .2s ease;
    }
`;

const ContenedorBtnAlimento = styled.div`
    display: flex;
    position: relative;
    width: auto;
    height: auto;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    flex-direction: column;

    @media(max-width: 60rem){ /* 950px */
        font-size: 12px;
    }

`;

const Alimento = styled.li`

    @media(max-width: 60rem){ /* 950px */
        font-size: 17px;
    }

`;

export {ContenedorPromocional_1, ContenedorPromocional_2, ContenedorPromocional_3, Boton,
        BotonAlimento, ContenedorBase, ContenedorBtnAlimento, ContenedorBase2,
        Alimento, Parrafo, Texto, BotonRedSocial};