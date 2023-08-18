import { css } from "@emotion/react";

export const SLayout = css`
    border-bottom: 1px solid #dbdbdb;
    padding: 20px 5px;
`;

export const STitle = css`
    margin-bottom: 10px;
    font-size: 11px;
    font-weight: 600;
`;

export const SListContainer = css`

`;

export const SListBox= (isSelected) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 5px;
    ${isSelected && "background-color: #eee;"}
    cursor: pointer;
`;


export const SListName= (isSelected) => css`
    display: inline-block;
    flex-grow: 1;
    margin-left: 5px;
    width: 100%;
    font-size: 14px;
    ${isSelected && "font-weight: 600;"}
`;

export const SCount = (isSelected) => css`
    display: flex;
    padding: 2px 5px;
    border-radius: 5px;
    width: 30px;
    height: 20px;
    justify-content: center;
    align-items: center;
    font-size: 11px;
    font-weight: 900;
    background-color: ${isSelected ? "#fff" : "#eaeaea"};
`;


export const S6 = css`

`;