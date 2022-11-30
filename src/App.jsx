import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailPage from "./pages/ProductDetailPage/ProductDetailPage";
import MyCartPage from "./pages/MyCartPage/MyCartPage";
import "./assets/style/reset.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductDetailPage />} />
                <Route path="/mycart" element={<MyCartPage />} />
            </Routes>
        </BrowserRouter>
    );
}
export default App;
