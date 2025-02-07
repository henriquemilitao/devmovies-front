import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        outline: none;
        font-family: "Montserrat", sans-serif;
        text-decoration: none;
    }

    body {
        background-color: #000000;
    }
    /* button, a {
        cursor: pointer;
        transition: all 0.25s;

    } */
`;

export default globalStyles;
