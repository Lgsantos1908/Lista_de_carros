import styled from "styled-components"

export const Container = styled.div`
    width: 310px;
    height: 400px;
    padding: 1.25rem;
    margin-top: 1.56rem;

`;

export const Card = styled.div`
    height: 100%;
    width: 100%;  
    display: flex;
    align-items: start;
    justify-content: space-between;
    flex-direction: column;
    
    
    h3{
        font-size: 1rem;
        color: var(--info);
        margin-bottom: 0.5rem;        
    }
`;

export const CardFront = styled.div`
    height: 270px;
    width: 250px;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
    backface-visibility: hidden;
    background-image: url('');
    background-size: cover;
    z-index:1;
    display: flex;
    justify-content: center;
    background-size: relatives;
    background-position: center;
    background-repeat: no-repeat;
    
`;

