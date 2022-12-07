import DeliveryInfo from "./DeliveryInfo/DeliveryInfo";
import QuantityCounter from "../QuantityCounter/QuantityCounter";
import TotalAmount from "./TotalAmount/TotalAmount";
import ButtonSection from "./ButtonSection/ButtonSection";

export default function BuyingSection() {
    return (
        <section>
            <h2>구매 영역</h2>
            <DeliveryInfo />
            <QuantityCounter />
            {/* <ChooseOption /> */}
            <TotalAmount />
            <ButtonSection />
        </section>
    );
}
