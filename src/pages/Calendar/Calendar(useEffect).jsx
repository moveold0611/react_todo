import React, { useEffect, useState } from 'react';
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import * as S from "./Style"

function Calendar(props) {
    const [ count, setCount ] = useState(0);
    const [ saveCount, setSaveCount ] = useState(0);
    // useEffect(마운트 때 실행될 함수, [상태변수])
    useEffect(() => {
        console.log("켈린더 컴포넌트가 마운트됨.");
        return () => {
            console.log("캘린더 컴포넌트가 언마운트됨");
        }
    }, [saveCount]);
    // []일 때는 페이지가 열릴 때(첫 랜더링)만 실행된다.
    // [상태변수]는 상태변수가 변함을 감지하고 함수가 실행된다.
    // return은 페이지가 닫힐 때 (언마운트) 실행된다.
    const handlePlusClick = () => {
        setCount(count + 1);    
    }

    const handleMinusClick = () => {
        setCount(count - 1);
    }

    const handleSaveClick = () => {
        setSaveCount(count);
    }


    return (
        <div css={S.SLayout}>
            <h1>{count}</h1>
            <h1>{saveCount}</h1>
            <button onClick={handlePlusClick}>+1</button>
            <button onClick={handleMinusClick}>-1</button>
            <button onClick={handleSaveClick}>save</button>
        </div>
    );
}

export default Calendar;