import { css } from "@emotion/react";

export const SLayout = css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
`;


export const SContainer = css`
    display: flex;
    align-items: center;
    justify-content:  space-between;
    width: 100%;
`;

export const STitle = css`
    font-weight: 600;
    font-size: 18px;
    cursor: default;
`;

export const SToggleButton = css`
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background-color: transparent;
    padding: 0 ;
    height: 100%;
    font-size: 18px;
    cursor: pointer;
`;

export const SSearchBox = css`
position: relative;
    display: flex;
    margin: 10px 0px;
    border: 1px solid #333;
    border-radius: 6px;
    padding: 5px 5px 5px 30px;
    width: 100%;
`;

export const SSearchIcon = css`
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    left: 5%;
`;

export const SSearchInput = css`
    border: none;
    width: 100%;
    outline: none;
    background-color: transparent;
    cursor: pointer;    
`;