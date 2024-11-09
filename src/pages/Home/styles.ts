import styled from "styled-components";

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
        display: flex;
        marging-top: 5rem;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        img {
            width: 10rem;
            height: 10rem;
        }

        h1 {
            font-size: 2.5rem;
        }
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
    }
`;

export const ForMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 1rem;
`;

