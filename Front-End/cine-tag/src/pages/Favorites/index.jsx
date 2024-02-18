import Card from "../../components/Card";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import styled from "styled-components";

const Container = styled.section`
  display: flex;
  justify-content: space-around;
`;

export default function Favorites() {
  return (
    <>
      <Banner image="favorite" />
      <Title text="My Favorites" />
      <Container>
        <Card title="ado" />;
      </Container>
    </>
  );
}
