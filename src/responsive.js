import { css } from "styled-components";

export const mobile = (props) => {
    return css`
        @media only screen and (max-width: 380px) {
            ${props}
        }
    `;
};

//  I can for other screen sizes below.

export const tablet = (props) => {
    return css`
        @media only screen and (max-width: 575px) {
            ${props}
        }
    `;
};