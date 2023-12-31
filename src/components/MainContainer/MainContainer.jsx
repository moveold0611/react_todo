import React, { useEffect } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import { isSidebarShowState, isRightSubSidebarState } from '../../store/sidebarStore';
import { useRecoilState } from 'recoil';

function MainContainer({ children }) {
    const [ isSidebarShow, setIsSidebarShow ] = useRecoilState(isSidebarShowState);
    const [ isRigthSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);

    useEffect(() => {
        return () => {
            setIsRightSubSidebar(false);
        }
    }, []);

    return (
        <div css={S.SContainer(isSidebarShow, isRigthSubSidebar)}>
            { children }
        </div>
    );
}

export default MainContainer;