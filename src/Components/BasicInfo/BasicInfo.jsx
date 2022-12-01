import React from "react";

export default function BasicInfo({ option }) {
    return (
        <section>
            <ThumbnailImage />
            <div>
                <ProductName />
                <ProductPrice />
            </div>
            <section>
                <h2>구매 영역</h2>
                <DeliveryInfo />
                {option.length ? <QuantityCounter /> : <Option />}
                <TotalAmount>
                    <span>총 상품 금액</span>
                    <span>
                        총 수량 <strong>1</strong>개
                    </span>
                    <span>
                        <strong>13,500</strong>원
                    </span>
                </TotalAmount>
                <div>
                    <BtnBuy />
                    <BtnCart />
                    <BtnHeart />
                </div>
            </section>
        </section>
    );
}
