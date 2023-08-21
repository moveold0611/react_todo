import { css } from "@emotion/react";

export const SContainer = (isMainSidebarShow, isRightSidebarShow) => {
    let width = 944;
    if(isMainSidebarShow) {
        width -= 250;
    }
    if(isRightSidebarShow) {
        width -= 310;
    }

    return css`
    position: absolute;
    transition: all 0.8s ease;
    padding: 20px;
    z-index: -1;
    left: ${isMainSidebarShow ? "270px" : "60px"};
    border-radius: 10px;
    width: ${width}px;
    height: 560px;
`
};
    


export const S1 = css`

`;

export const S2 = css`

`;

export const S3 = css`

`;

export const S4 = css`

`;

export const S5 = css`

`;

export const S6 = css`

`;