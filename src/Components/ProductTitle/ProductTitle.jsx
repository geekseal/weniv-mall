import styled from "styled-components";

export default function ProductTitle({ productName, price }) {
    return (
        <>
            <ProductName>{productName}</ProductName>
            <p>
                <ProductPrice>{price}</ProductPrice>원
            </p>
        </>
    );
}

const ProductName = styled.strong`
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
