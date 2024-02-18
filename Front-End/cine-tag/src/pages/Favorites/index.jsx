import Card from "../../components/Card";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import styled from "styled-components";
import { useFavoriteContext } from "../../contexts/Favorites";

const Container = styled.section`
  display: flex;
  justify-content: space-around;
`;

export default function Favorites() {
  const { favorite } = useFavoriteContext();
  return (
    <>
      <Banner image="favorite" />
      <Title text="My Favorites" />
      <Container>
        {favorite.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </Container>
    </>
  );
}
