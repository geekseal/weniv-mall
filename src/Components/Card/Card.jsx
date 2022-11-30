import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const ThumbnailImage = styled.img`
    width: 240px;
    border: 1px solid #bdbdbd;
    border-radius: 10px;
`;

const LiProduct = styled.li`
    display: flex;
    flex-direction: column;
`;

const LinkProductDetail = styled(Link)`
    text-decoration: initial;
    color: initial;
`;

export default function Card({ id, thumbnailImg, productName, price }) {
    return (
        <li>
            <LinkProductDetail to={`/product/${id}`}>
                <ThumbnailImage
                    src={`https://test.api.weniv.co.kr/${thumbnailImg}`}
                    alt=""
                />
                <p>{productName}</p>
                <span>{price}</span>
                <button
                    onClick={e => {
                        e.currentTarget.classList.toggle("on");
                        console.log(e.currentTarget.classList);
                    }}
                    className="like-btn"
                ></button>
            </LinkProductDetail>
        </li>
    );
}
