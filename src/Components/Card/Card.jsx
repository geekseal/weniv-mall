import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import iconHeartOff from "../../assets/images/icon-heart.png";
import iconHeartOn from "../../assets/images/icon-heart-on.png";

const LinkProductDetail = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 240px;
    position: relative;
`;

const ThumbnailImage = styled.img`
    border: 1px solid #bdbdbd;
    border-radius: 10px;
`;

const ProductName = styled.p`
    width: 90%;
    font-size: 14px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
`;

const ProductPrice = styled.strong`
    font-size: 1.2em;
    font-family: "Spoqa Han Sans Neo Medium";
    margin-right: 2px;
`;

const BtnHeart = styled.button`
    width: 18px;
    height: 18px;
    background: url(${iconHeartOff}) no-repeat center / 18px 18px;
    position: absolute;
    right: 0;
    bottom: 2.4em;
    &.on,
    &:hover {
        background: url(${iconHeartOn}) no-repeat center / 18px 18px;
    }
`;

function HandleBtnHeart(e) {
    e.preventDefault();
    e.currentTarget.classList.toggle("on");
    console.log(e.currentTarget.classList);
}

export default function Card({ id, thumbnailImg, productName, price }) {
    return (
        <LinkProductDetail to={`/product/${id}`}>
            <ThumbnailImage
                src={`https://test.api.weniv.co.kr/${thumbnailImg}`}
                alt=""
            />
            <ProductName>{productName}</ProductName>
            <span>
                <ProductPrice>{price}</ProductPrice>원
            </span>
            <BtnHeart
                onClick={event => {
                    HandleBtnHeart(event);
                }}
            ></BtnHeart>
        </LinkProductDetail>
    );
}
