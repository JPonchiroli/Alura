import Title from "../../components/Title";
import Banner from "../../components/Banner";
import styled from "styled-components";
import videos from "../../json/db.json";
import { useParams } from "react-router-dom";
import NotFound from "../NotFound";

const StyledIframe = styled.iframe`
  height: 80vh;
  position: relative;
  left: 13%;
  margin: 50px 0 50px 0;
`;

export default function Player() {
  const params = useParams();
  const video = videos.find((video) => {
    return video.id === Number(params.id);
  });

  if (!video) {
    return <NotFound />;
  }

  return (
    <>
      <Banner image="player" />
      <Title>
        <h1>Player</h1>
      </Title>
      <section>
        <StyledIframe
          width="75%"
          height="100%"
          src={video.link}
          title={video.title}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        />
      </section>
    </>
  );
}
