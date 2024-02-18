import styled from "styled-components";

const StyledBanner = styled.div`
  width: 100%;
  height: 374px;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default function Banner({ image }) {
  const path = `/src/images/banner-${image}.png`;
  return <StyledBanner style={{ backgroundImage: `url('${path}')` }} />;
}
