import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
    }
	body {
		background-color: aqua;
		padding: 10px;
	}
`;

export const StyledComponent1 = styled.div`
	background: red;
`;

export const StyledComponent2 = styled(StyledComponent1)`
	background: blue;
	border-radius: 10px;
	text-align: center;
`;