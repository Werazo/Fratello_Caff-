import { styled } from "styled-components";


const Barra = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 8vw;
    background-color: #ffffff;
    box-shadow: 0px 0px 6px rgba(10, 10, 10, 0.4);
 
    @media(max-width: 60rem){ /* 950px */
        justify-content: space-around;
        height: 12vh;
        align-items: center;
 
        & > * {
            width: 100%;
            margin-bottom: 0.62rem; /* 10px */
        }
    }
`;

const ContenedorBtns = styled.div`
width: 80%;
font-size: 17px;
display: flex;
position: unset;
top: 0;
left: 0;
width: 100%;
height: 8vw;
background-color:none;
justify-content: space-around;

@media(max-width: 60rem){ /* 950px */
    justify-content: space-around;
    height: 15vh;
    align-items: center;
    margin-right: 5px;
    width: 85%;
    font-size: 26px;
}
`;

const ContenedorLogo = styled.div`
width: 20%;
font-size: 120%;
display: flex;
position: relative;
top: 0;
left: 0;
width: 100%;
height: 8vw;
background-color: none;
justify-content: right;


@media(max-width: 60rem){ /* 950px */
    justify-content: right;
    height: 15vh;
    align-items: center;
    width: 15%;
    & > * {
        margin-bottom: 0.62rem; /* 10px */
    }
}
`;

const Btn = styled.li`
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
 
    @media(max-width: 60rem){ /* 950px */
        width: 2.5rem; /* 40px */
        height: 2.5rem; /* 40px */
        line-height: 2.5rem; /* 40px */
    }
`;

 const BtnLink = styled.a`
  font-family: sans-serif;
  font-size: 1.2em;
  position: relative;
  width: 20%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  z-index: 99;
  color: #47413b;
  box-sizing: border-box;

  &:before{
    display: block;
    content: "";
    position: absolute;
    top: calc(80% - 5px);
    left: 0;
    height: 0.2rem;
    transform: scaleX(0);
    border-radius: 1px;
    transition: 0.5s;
  }

  &:hover{
    position: relative;
    color: #d60505;
    border-bottom: 5px;
    border-bottom-color: #d40000;
    border-bottom-style: outset;
    transition: 0.09s;
    
    &:before{
        transform: scaleX(1);
        transition: 0.5s;
    }
  }

  @media(max-width: 60rem){ /* 950px */
    font-size: 16px;
    }
`;

const Logo = styled.img`
  width: 6vw;
  height: 77%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin-top: 10px;
 
    @media(max-width: 60rem){ /* 950px */
        width: 2.5rem; /* 40px */
        height: 2.5rem; /* 40px */
        line-height: 2.5rem; /* 40px */
        top: 7px;
        margin-right: 2px;
    }
`;

export {Barra, Btn, BtnLink, Logo, ContenedorBtns, ContenedorLogo};