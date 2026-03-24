import { createGlobalStyle, css } from "styled-components"
import * as Colors from "./Colors.tsx"


export const GlobalStyles = createGlobalStyle`

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
}

 body {
    height: auto;
    width: 100%;
    background: ${Colors.white};
    color: ${Colors.black};
}

html {
    scroll-behavior: smooth;
}
`

export const Center = css`
    display: flex;
    align-items: center;
    justify-content: center;
`