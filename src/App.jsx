import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import MyCartPage from "./pages/MyCartPage/MyCartPage";
import reset from "styled-reset";
import { createGlobalStyle } from "styled-components";
import SpoqaHanSansNeoBold from "./assets/fonts/SpoqaHanSansNeo-Bold.woff2";
import SpoqaHanSansNeoMedium from "./assets/fonts/SpoqaHanSansNeo-Medium.woff2";
import SpoqaHanSansNeoRegular from "./assets/fonts/SpoqaHanSansNeo-Regular.woff2";

const GlobalStyle = createGlobalStyle`
    ${reset}
    
    a {
        text-decoration: none;
        color: inherit;
    }

    * {
        box-sizing: border-box;
    }

    button {
        border-style: none;
    }

    img {
        vertical-align: top;
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo Bold';
        font-style: normal;
        src: url(${SpoqaHanSansNeoBold}) format('woff2');
        font-weight: 700;
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo Medium';
        font-style: normal;
        src: url(${SpoqaHanSansNeoMedium}) format('woff2');
        font-weight: 500;
    }

    @font-face {
        font-family: 'Spoqa Han Sans Neo Regular';
        font-style: normal;
        src: url(${SpoqaHanSansNeoRegular}) format('woff2');
        font-weight: 400;
    }

    :root {
        font-family: 'Spoqa Han Sans Neo Regular', 'sans-serif';
    }
`;

function App() {
    return (
        <>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/product/:id"
                        element={<ProductDetailPage />}
                    />
                    <Route path="/mycart" element={<MyCartPage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
