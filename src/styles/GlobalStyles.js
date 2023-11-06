//estilos globales 
import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    :root {
        --rosa: #ff0076;
        --amarillo: #c2ff05;
    }

html {
    scroll-behavior: smooth;
}
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Edu TAS Beginner', cursive;
}
body {
    background-color: #131311;
    overflow-x: hidden;
}
a {
    text-decoration: none;
    }
    //a:visited {
    //color: white;
    //}
    li {
    list-style: none;
    }
`;