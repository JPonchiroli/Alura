import styled from "styled-components";
import Title from "../../Title";
import pictures from "./populars-pictures.json";

const PictureColumn = styled.section`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Image = styled.img`
  max-width: 212px;
  border-radius: 20px;
  margin-left: 10px;
`

const StyledButton = styled.button`
  background-color: transparent;
  color: #fff;
  border: 2px solid;
  border-color: #C98CF1;
  padding: 12px 20px;
  font-size: 20px;
  border-radius: 10px;
  cursor: pointer;
  width: 100%;
  margin-top: 16px;
  margin-left: 10px;
`

export default function Populars() {
  return (
    <section>
      <Title $aling="center">Populars</Title>
      <PictureColumn>
        {pictures.map((picture) => (
          <Image key={picture.id} src={picture.path} alt={picture.alt} />
        ))}
      </PictureColumn>
      <StyledButton>See More</StyledButton>
    </section>
  );
}
