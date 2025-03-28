import styled from "styled-components";

export const Container = styled.div`
    
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Ocupa toda a altura da tela */
`;

export const FormUser = styled.div`
        background-color: #fff;
        padding: 2rem 3rem;
        border-radius: 10px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1); /* Sombra suave para dar destaque */
        width: 100%;
        max-width: 400px; /* Limita a largura do formulário */
    
    form {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
    }

    h3 {
        text-align: center;
        font-size: 3rem;
        color: #333;
        margin-bottom: 1rem;
    }

    h2 {
        text-align: center;
        font-size: 2rem;
        color: #333;
        margin-bottom: 1rem;
    }

    input {
        width: 100%;
        padding: 0.8rem;
        border: 1px solid #ccc;
        border-radius: 0.62rem;
        font-size: 1rem;
        margin-bottom: 1rem;
        background-color: var(--input_bg);
        color: var(--input_text);
        transition: all 0.3s ease-in-out;
    }

    input:focus {
        border-color: var(--highlight);
        outline: none;
        background-color: var(--input_focus_bg); /* Cor de fundo ao focar */
    }

    input[type="submit"] {
        width: 100%;
        padding: 1rem;
        color: white;
        font-size: 1.1rem;
        border: none;
        border-radius: 0.75rem;
        background: var(--bg_button);
        cursor: pointer;
        transition: background-color 0.3s ease-in-out;

        &:hover {
            background-color: var(--bg_button_click);
        }
    }

    input[type="submit"]:active {
        background-color: var(--bg_button_active); /* Cor de fundo ao clicar */
    }

    /* Responsividade para telas menores */
    @media (max-width: 768px) {
        width: 90%;
    }
`;

