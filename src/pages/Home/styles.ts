import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeaderMenu = styled.div`
    width: 100%;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
        width: 24rem;
        height: 20rem;
    }

    h1 {
        font-size: 4.5rem;
        color: #222233;
        margin-top: 1rem;
    }

    /* Responsividade para telas menores */
    @media (max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        img {
            width: 18rem;
            height: 15rem;
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
    padding: 2rem 0;
`;

export const ForMenu = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    gap: 1rem;
`;

