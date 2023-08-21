import { css } from "@emotion/react";

export const SLayout = (isShow) => css`
    position: relative;
    transition: left 0.8s ease;
    left: ${isShow ? "0px" : "-200px"};
    border-radius: 10px;
    padding: 15px;
    width: 240px;
    height: 100%;
    background-color: #f5f5f5;
    overflow: hidden;
`;