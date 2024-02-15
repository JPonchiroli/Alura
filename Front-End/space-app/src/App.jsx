import styled from "styled-components";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Banner from "./components/Banner";
import Gallery from "./components/Gallery";

import pictures from './pictures.json'
import { useState } from "react";
import ZoomModal from "./components/ZoomModal";

const GradientBackground = styled.div`
  background: linear-gradient(
    174.61deg,
    #041833 4.16%,
    #04244f 48%,
    #154580 96.76%
  );
  width: 100%;
  min-height: 100vh;
  margin: 0;
`;

const AppContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  max-width: 1440px;
`;

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`;

const GalleryContent = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

export default function App() {
  const [galleryPictures, setGalleryPictures] = useState(pictures)
  const [selectedPicture, setSelectedPicture] = useState(null)
  return (
    <GradientBackground>
      <AppContainer>
        <Header />
        <MainContainer>
          <Aside />
          <GalleryContent>
            <Banner />
            <Gallery
              onPictureSelected={picture => setSelectedPicture(picture)}
              pictures={galleryPictures}
            />
          </GalleryContent>
        </MainContainer>
      </AppContainer>
      <ZoomModal
        picture={selectedPicture}
        onClose={() => setSelectedPicture(null)}/>
    </GradientBackground>
  );
}

