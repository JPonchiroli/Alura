import "./Banner.css";
import React from "react";

interface BannerProps {
  enderecoImagem: string;
  textAlternativo?: string;
}

export const Banner = ({ enderecoImagem, textAlternativo }: BannerProps) => {
  // TSX
  return (
    <header className="banner">
      {/* <img
        src="/imagens/banner.png"
        alt="O banner principal da página do Organo"
      />*/}
      <img src={enderecoImagem} alt={textAlternativo} />
    </header>
  );
};

export default Banner;
