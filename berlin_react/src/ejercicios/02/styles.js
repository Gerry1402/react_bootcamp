import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
    body{
        margin: 0;
        padding: 0;
        height: 100vh;
        display: flex;
        align-items: center;
    }
`;

export const BoxPregunta = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    background: beige;
`;
export const BoxRespuestas = styled.div`
    text-align: left;
`;

export const BoxPantalla = styled.div`
    display: flex;
    justify-content: space-around;
    height: 95vh;
    width: 100%;
    img{
        height: 100%;
    }
`;

export const BoxPopup = styled.div`
    display: ${({$visible}) => $visible ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    div{
        background-color: white;
        padding: 10px;
        position: relative;
        border-radius: 10px;
        overflow: hidden;
        text-align: center;
        min-width: 30%;
    }
    button{
        position: absolute;
        top: 0;
        right: 0;
        background: transparent;
        border: none;
        cursor:pointer;
        padding: 5px;
    }
`;