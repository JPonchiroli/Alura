import styled from "styled-components";
import unfavoriteIcon from "./unfavorite.png";

const Container = styled.div`
  padding: 0 0 1em 0;
  margin-top: 0.5em;
  width: 282px;
  background-color: var(--gray);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Cover = styled.img`
  width: 100%;
`;

const Title = styled.h2`
  padding: 0 1em;
`;

const Favorite = styled.img`
  padding: 0 1em;
  width: 25px;
`;

export default function Card({ id, title, cover }) {
  return (
    <Container>
      <Cover src={cover} alt={title} />
      <Title>{title}</Title>
      <Favorite src={unfavoriteIcon} alt="Favorite Movie" />
    </Container>
  );
}
