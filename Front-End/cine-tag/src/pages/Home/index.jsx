import Title from "../../components/Title";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/Card";
import videos from "../../json/db.json";
import styled from "styled-components";

const Container = styled.section`
    display: flex;
    justify-content: space-around;
`

export default function Home() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Title text="A place to keep your videos and movies!" />
      <Container>
        {videos.map((video) => {
          return <Card {...video} key={video.id} />;
        })}
      </Container>
      <Footer />
    </>
  );
}
