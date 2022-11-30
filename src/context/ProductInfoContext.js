import { createContext } from "react";

async function reqProductInfo() {
    const res = await fetch("https://test.api.weniv.co.kr/mall");
    const productInfo = await res.json();
    return productInfo;
}

console.log(reqProductInfo());

export const ProductInfoContext = createContext(reqProductInfo());
