import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #454646;
        --title:  #d5d6d6;
        --info: #f2ecff;

        --bg_form: #ffffff; /* Cor de fundo do formulário */
        --input_bg: #f0f0f0; /* Cor de fundo dos inputs */
        --input_text: #333; /* Cor do texto nos inputs */
        --input_focus_bg: #e6e6e6; /* Cor de fundo dos inputs ao focar */
        --highlight: #007BFF; /* Cor do destaque (bordas ao focar) */
        --bg_button: #28a745; /* Cor de fundo do botão */
        --bg_button_click: #218838; /* Cor do botão ao passar o mouse */
        --bg_button_active: #1e7e34; /* Cor do botão ao clicar */
        
    }
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Inter',sans-sarif;
        font-weight: 400;
        font-size: 1rem;
        background: var(--background);
        
    }

`;