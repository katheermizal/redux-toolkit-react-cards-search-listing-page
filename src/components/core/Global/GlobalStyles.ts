import { createGlobalStyle } from "styled-components";
import { device } from '../../util/devices';
import { 
    colorBg,
    colorBorder,
    colorTypho,
    fontFamily,
    fontSize,
    fontWeight,
    lineHeight 
} from '../../util/variables';

const GlobalStyles =  createGlobalStyle`
    html, 
    body,
    * {
        margin: 0;
        padding: 0;
        outline:0;
        font-family: '${ fontFamily.name }' , ${ fontFamily.type };
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        box-sizing:border-box;
    }

    body {
        font-size: ${ fontSize.body };
        font-weight: ${ fontWeight.body };
        line-height: ${ lineHeight.body };
        color: ${ colorTypho.body };
        background: ${ colorBg.body };
    }

    #root { margin:0 auto; }

    h1,
    h2 {
        font-size: ${ fontSize.headingMobile };
        color: ${ colorTypho.heading };
    }

    p {
        font-size: ${ fontSize.paragaraph };
    }

    a {
        color: ${ colorTypho.link }
        text-decoration: none;

        &:focus,
        &:active,
        &:hover {
            color: ${ colorTypho.link };
            text-decoration: none;
        }
    }

    input[type="text"] {
        height: 30px;
        padding-left: 6px;
        padding-right: 30px;
        background: ${ colorBg.input };
        font-size: ${ fontSize.input };
        color: ${ colorTypho.inputActive };
        border: 1px solid ${ colorBorder.input };
        border-radius: 4px;
    }

    input::-webkit-input-placeholder { color: ${ colorTypho.inputPlaceHolder }; }
    input::-moz-placeholder { color: ${ colorTypho.inputPlaceHolder }; }
    input:-ms-input-placeholder { color: ${ colorTypho.inputPlaceHolder }; }
    input:-moz-placeholder { color: ${ colorTypho.inputPlaceHolder }; }

    @media ${device.exceptTablet} { 
        h1,
        h2 {
            font-size: ${ fontSize.heading };
        }

        a {
            &:hover {
                color: ${ colorTypho.linkActive }
            }
        }
    }
`;

export default GlobalStyles;