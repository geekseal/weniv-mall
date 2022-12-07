import React from "react";
import styled from "styled-components";
import iconMinus from "../../assets/images/minus-icon.svg";
import iconPlus from "../../assets/images/plus-icon.svg";

export default function QuantityCounter() {
    return (
        <CounterBox>
            <BtnMinus></BtnMinus>
            <CountNumber>1</CountNumber>
            <BtnPlus></BtnPlus>
        </CounterBox>
    );
}

const CounterBox = styled.div`
    display: flex;
`;

const CountNumber = styled.span`
    display: inline-block;
    width: 40px;
    height: 40px;
`;

const BtnMinus = styled.button`
    width: 40px;
    height: 40px;
    background: #fff url(${iconMinus}) no-repeat center;
`;

const BtnPlus = styled.button`
    width: 40px;
    height: 40px;
    background: #fff url(${iconPlus}) no-repeat center;
`;
