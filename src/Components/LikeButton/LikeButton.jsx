import React from "react";
import iconHeartOff from "../../assets/images/icon-heart.png";
import iconHeartOn from "../../assets/images/icon-heart-on.png";
import styled from "styled-components";

export default function LikeButton() {
    return <BtnLike onClick={e => HandleBtnLike(e)} />;
}

const BtnLike = styled.button`
    width: 18px;
    height: 18px;
    background: url(${iconHeartOff}) no-repeat center / 18px 18px;
    position: absolute;
    right: 0;
    bottom: 2.4em;
    &.on {
        background: url(${iconHeartOn}) no-repeat center / 18px 18px;
    }
`;

function HandleBtnLike(event) {
    event.preventDefault();
    event.currentTarget.classList.toggle("on");
    console.log(event.currentTarget.classList);
}
