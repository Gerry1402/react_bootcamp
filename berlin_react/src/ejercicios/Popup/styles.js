import styled from 'styled-components';

export const Box = styled.div`
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
