import Title from "../../components/Title";
import Banner from "../../components/Banner";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Card from "../../components/Card";

export default function Home() {
  return (
    <>
      <Header />
      <Banner image="home" />
      <Title text="A place to keep your videos and movies!" />
      <Card
        id="1"
        title="First Movie"
        cover="https://upload.wikimedia.org/wikipedia/pt/b/bf/O_auto_da_compadecida.jpg"
      />
      <Footer />
    </>
  );
}
