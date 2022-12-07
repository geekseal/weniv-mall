import ProductImage from "../ProductImage/ProductImage";
import ProductTitle from "../ProductTitle/ProductTitle";
import BuyingSection from "../BuyingSection/BuyingSection";

export default function ProductBasicInfo({ option }) {
    return (
        <section>
            <ProductImage {...{ thumbnailImg }} />
            <ProductTitle {...{ productName, price }} />
            <BuyingSection />
        </section>
    );
}
