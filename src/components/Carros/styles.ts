import styled from "styled-components"

export const Container = styled.div`
    width: 310px;
    height: 380px;
    padding: 1.25rem;
    margin-top: 1.56rem;

    h3{
        color: white;
        height: 3.43rem;       
        display: flex;
        align-items: center;
        justify-content: center;
        
    }
`;

export const Card = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    transition: transform 1500ms;
    transform-style: preserve-3d;    
   
`;

export const CardFront = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 2rem;
    box-shadow: 0 0 5px 2px rgba(50, 50, 50, 0.25);
    position: absolute;
    backface-visibility: hidden;
    background-image: url('');
    background-size: cover;
    z-index:1;
    display: flex;
    justify-content: center;
    
`;

