import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
    *{
        padding: 0px;
        margin: 0px;
        font-family: "Bricolage Grotesque", serif;
        font-optical-sizing: auto;
    }
    body{
        display: flex;
        flex-direction: column;
        align-items: center;
        background-color: #000000;
    }
`
export default GlobalStyles