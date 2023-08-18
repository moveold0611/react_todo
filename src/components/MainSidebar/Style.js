import { css } from "@emotion/react";

export const SLayout = (isShow) => css`
    position: relative;
    left: ${isShow ? "0px" : "-210px"};
    transition: left 0.8s ease;
    border-radius: 10px;
    padding: 20px;
    width: 250px;
    height: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
`;