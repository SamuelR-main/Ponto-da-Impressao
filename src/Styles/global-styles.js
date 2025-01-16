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
        height: 100%;
        background-color:rgb(73, 73, 73);
    }
`
export default GlobalStyles