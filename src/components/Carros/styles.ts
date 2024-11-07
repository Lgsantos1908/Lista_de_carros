import styled from "styled-components"

export const Container = styled.div`
    width: 310px;
    height: 380px;
    padding: 1.25rem;
    margin-top: 1.56rem;

`;

export const Card = styled.div`
    height: 100%;
    width: 100%;  
    display: flex;
    align-items: start;
    justify-content: center;
    flex-direction: column;
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    
    
    h3{
        color: white;
        margin-bottom: 0.5rem;        
    }
`;

export const CardFront = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
    background-image: url('');
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    z-index: 1;
    display: flex;
    justify-content: center;
    
`;

