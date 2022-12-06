import styled from "styled-components";

export default function ProductImage({ thumbnailImg }) {
    return (
        <ThumbnailImage
            src={`https://test.api.weniv.co.kr/${thumbnailImg}`}
            alt=""
        />
    );
}

const ThumbnailImage = styled.img`
    border: 1px solid #bdbdbd;
    border-radius: 10px;
`;
