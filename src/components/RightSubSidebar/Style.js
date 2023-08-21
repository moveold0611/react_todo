import { css } from "@emotion/react";

export const SLayOut = (isShow) => {
    return css`
    position: absolute;
    transition: all 0.8s ease;
    right: ${isShow ? "300px" : "0px"};
    z-index: -1;
    border-radius: 10px;
    width: 300px;
    height: 560px;
    background-color: #eee;    
`}; 