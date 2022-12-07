import { Link } from "react-router-dom";
import styled from "styled-components";
import iconCart from "../../assets/images/icon-shopping-cart-white.svg";

export default function Cart() {
    return <LinkMyCart to="/mycart" />;
}

const LinkMyCart = styled(Link)`
    display: inline-block;
    width: 80px;
    height: 80px;
    border-radius: 80px;
    background: #6327fe url(${iconCart}) no-repeat center / 40px 40px;
`;
