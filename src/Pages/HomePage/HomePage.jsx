import React from "react";
import Card from "../../components/Card/Card";
import Cart from "../../components/Cart/Cart";
import { useState, useContext } from "react";
import { ProductInfoContext } from "../../context/ProductInfoContext";
import styled from "styled-components";

const Main = styled.main`
    display: flex;
    gap: 60px;
    justify-content: center;
    padding: 100px 0;
`;

const UlProduct = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
`;

const Aside = styled.aside`
    position: fixed;
    transform: translateX(480px);
`;

export default function HomePage() {
    const [loadData, setLoadData] = useState(null);

    useContext(ProductInfoContext).then(data => {
        console.log("세팅");
        setLoadData(data);
    });

    return (
        <Main>
            {loadData !== null ? (
                <>
                    <UlProduct>
                        {loadData.map(item => (
                            <li key={item.id}>
                                <Card {...item} />
                            </li>
                        ))}
                    </UlProduct>
                    <Aside>
                        <Cart></Cart>
                    </Aside>
                </>
            ) : (
                <></>
            )}
        </Main>
    );
}
