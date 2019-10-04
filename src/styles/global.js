import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

    * {
        padding: 0;
        margin: 0;
        outline: 0;

        font-family: 'Montserrat', sans-serif !important;
        color: #444444 !important;
    }

    body {
        background: #845EC2;
    }
`;