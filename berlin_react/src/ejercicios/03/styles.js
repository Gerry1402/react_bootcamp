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

export const BoxImagenes = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    width: 100%;
    img{
        width: 100%;
    }
    img:first-child{
        grid-row: span 2;
    }
    #${(imagen) => imagen}{
        border: 1px solid black;
    }
    div{
        border: 4px solid transparent;
    }
`;

export const BoxTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;


export const BoxPantalla = styled.div`
    height: 100vh;
    width: 100%;
`;