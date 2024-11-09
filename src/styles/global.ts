import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        --background: #454646;
        --title:  #d5d6d6;
        --info: #f2ecff;
        
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