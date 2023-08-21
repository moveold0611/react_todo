/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from 'react';
import * as S from "./Style"
import { useRecoilState } from "recoil";
import { isRightSubSidebarState } from "../../store/sidebarStore";

function RightSubSidebar({ children }) {
    const [ isRigthSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    return (
        <div css={S.SLayOut(isRigthSubSidebar)}>
            {children}
        </div>
    );
}

export default RightSubSidebar;