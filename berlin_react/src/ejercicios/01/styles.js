import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
`;

export const BoxFrases = styled.div`
    p:nth-child(${({$position}) => $position }){
	    background-color: red;
    }
`;

export const BoxBotones = styled.div`
    display: flex;
    gap: 3px;
`;
