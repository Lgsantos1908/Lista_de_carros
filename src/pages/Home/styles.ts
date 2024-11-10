import styled from "styled-components";
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
`;

export const HeaderMenu = styled.div`
    width: 100%;
    height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;

    h1 {
        font-size: 4.5rem;
        color: var(--title);
    }

    img {
        width: 20rem;
        height: 19rem;
    }  

    /* Responsividade para telas menores */
    @media (max-width: 768px) {
        height: 50vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        img {
            width: 10rem;
            height: 10rem;

        }

        h1 {
            font-size: 2.5rem;
            
            marging-top: 5rem;
        }
    }
`;

export const Dados = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

`

export const Total = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    h1 {
        font-size: 1.8rem;
        color: var(--info);
    }

    h2{
        font-size: 1.5rem;
        color: var(--info);
    }

    

`

export const StyledLink = styled(Link)`
  display: inline-block;
  padding: 0.75rem 1.5rem;  /* 12px 24px */
  font-size: 1rem;          /* 16px */
  font-weight: bold;
  text-align: center;
  text-decoration: none;
  marging-top: 3rem;
  background-color: #4CAF50; /* Cor verde */
  color: white;
  border-radius: 0.5rem;     /* 8px */
  box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.2);  /* 4px 8px */
  transition: all 0.3s ease;

  &:hover {
    background-color: #45a049; /* Cor verde mais escura */
    transform: translateY(-0.125rem); /* Efeito de elevação ao passar o mouse */
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);  /* 8px 16px */
  }

  &:active {
    background-color: #3e8e41; /* Cor ainda mais escura ao clicar */
    transform: translateY(0); /* Retorna ao estado original */
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 0.25rem rgba(0, 123, 255, 0.5); /* Foco no botão */
  }
`;  


export const Content = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
    width: 100%;
    max-width: 400px;
    padding: 0.75rem 1rem;
    font-size: 1rem;
    color: #333;
    background-color: #f9f9f9;
    border: 2px solid #ddd;
    border-radius: 8px;
    outline: none;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;

    &::placeholder {
        color: #aaa;
    }

    &:focus {
        border-color: #4CAF50; /* Verde no foco */
        box-shadow: 0 0 8px rgba(76, 175, 80, 0.3); /* Efeito de brilho ao focar */
    }

    &:hover {
        border-color: #bbb; /* Altera a cor da borda ao passar o mouse */
    
    }
`;

export const ForMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 1rem;
`;

