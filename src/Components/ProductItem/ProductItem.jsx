import styled from "styled-components";
import { Link } from "react-router-dom";

import ProductImage from "../ProductImage/ProductImage";
import ProductTitle from "../ProductTitle/ProductTitle";
import LikeButton from "../LikeButton/LikeButton";

export default function Card({ id, thumbnailImg, productName, price }) {
    return (
        <LinkProductDetail to={`/product/${id}`}>
            <ProductImage {...{ thumbnailImg }} />
            <ProductTitle {...{ productName, price }} />
            <LikeButton />
        </LinkProductDetail>
    );
}

const LinkProductDetail = styled(Link)`
    display: flex;
    flex-direction: column;
    gap: 14px;
    width: 240px;
    position: relative;
`;
