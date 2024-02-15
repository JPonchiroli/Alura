import styled from "styled-components";
import Title from "../Title";
import Tags from "./Tags";
import Populars from "./Populars";
import Image from "./Image";

const GalleryContainer = styled.div`
  display: flex;
`;

const FluidSection = styled.section`
  flex-grow: 1;
`;

const ImagesContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 24px;
`

export default function Gallery({ pictures = [], onPictureSelected }) {
  return (
    <>
      <Tags />
      <GalleryContainer>
        <FluidSection>
          <Title>Browse the gallery</Title>
          <ImagesContainer>
            {pictures.map( picture => 
              <Image 
                onZoom={onPictureSelected}
                key={picture.id} 
                picture={picture} 
                expand={false}
              />
            )}
          </ImagesContainer>
        </FluidSection>
        <Populars />
      </GalleryContainer>
    </>
  );
}
