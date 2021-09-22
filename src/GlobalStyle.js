import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
html {
  scroll-behavior: smooth;
}

body,
li,
ol,
ul {
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Courier New';
  font-size: 16px;
  font-weight: 700;
  line-height: 1.3;
  letter-spacing: .4px;
  background-color: #1d1d1d;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
}

body.overflow {
  overflow: hidden;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

li,
ol,
ul {
  list-style-type: none;
}

a {
  color: #000;
}

a,
a:hover {
  text-decoration: none;
}

audio,
canvas,
iframe,
img,
svg,
video {
  vertical-align: middle;
}

textarea {
  resize: none;
}

section {
  position: relative;
}

input,
select,
textarea {
  border: 0;
  outline: 0!important;
}

input::-webkit-inner-spin-button,
input::-webkit-outer-spin-button {
  margin: 0;
  -webkit-appearance: none;
}

input[type=number] {
  -moz-appearance: textfield;
}

button {
  cursor: pointer;
  border: 0;
  background: 0 0;
}

*,
::after,
::before {
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
`
