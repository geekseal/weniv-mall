import React from "react";
import Card from "../../components/Card/Card";
import Cart from "../../components/Cart/Cart";
import { useState, useContext } from "react";
import { ProductInfoContext } from "../../context/ProductInfoContext";

export default function HomePage() {
    const [loadData, setLoadData] = useState(null);

    useContext(ProductInfoContext).then(data => {
        console.log("세팅");
        setLoadData(data);
    });

    return (
        <main className="product">
            {loadData !== null ? (
                <>
                    <ul className="list-product">
                        {loadData.map(item => (
                            <Card key={item.id} {...item} />
                        ))}
                    </ul>
                    <Cart />
                </>
            ) : (
                <></>
            )}
        </main>
    );
}
