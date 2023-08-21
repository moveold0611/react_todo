/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"
import React from 'react';
import { FaChevronRight } from "react-icons/fa"
import { isRightSubSidebarState } from '../../../store/sidebarStore';
import { useRecoilState } from 'recoil';


function TaskList({ target, setTarget }) {
    const [ isRightSubSidebar, setIsRightSubSidebar ] = useRecoilState(isRightSubSidebarState);


    const handleOpenClick = (e) => {
        if(target === e.target) {
            setIsRightSubSidebar(false);
            setTarget(null);
        }else if(target === null) {
            setIsRightSubSidebar(true);
            setTarget(e.target);
        }else {
            setTarget(e.target)
        }
    }

    // 캡쳐링 (하위부터 명령)
    const handleCheckBoxClick = (e) => {
        e.stopPropagation(); // 버블링(상위부터 명령) 현상 방지
    }
    return (
        <ul css={S.SLayout}>
            
            <li css={S.SListBox} onClick={handleOpenClick}>
                <div css={S.SListContent}>
                    <input type="checkbox" css={S.SCheckBox} onClick={handleCheckBoxClick}/>
                    <span>Research content ideas</span>
                </div>
                <FaChevronRight />
            </li>            
        </ul>
    );
}

export default TaskList;