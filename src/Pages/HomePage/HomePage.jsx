import React from "react";
import Card from "../../components/ProductItem/ProductItem";
import Cart from "../../components/Cart/Cart";
import { useState, useContext } from "react";
import { ProductInfoContext } from "../../context/ProductInfoContext";
import styled from "styled-components";

export default function HomePage() {
    const [loadData, setLoadData] = useState([]);

    useContext(ProductInfoContext).then(data => {
        console.log("세팅");
        setLoadData(data);
    });

    return (
        <Main>
            {loadData && (
                <>
                    <ProductList>
                        {loadData.map(item => (
                            <li key={item.id}>
                                <Card {...item} />
                            </li>
                        ))}
                    </ProductList>
                    <Aside>
                        <Cart></Cart>
                    </Aside>
                </>
            )}
        </Main>
    );
}

const Main = styled.main`
    display: flex;
    gap: 60px;
    justify-content: center;
    padding: 100px 0;
`;

const ProductList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
`;

const Aside = styled.aside`
    position: fixed;
    transform: translateX(480px);
`;
