import styled from "styled-components";

const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default function NotFound() {
  return (
    <StyledSection>
      <h2>Error 404</h2>
      <p>The content that you search was not found!</p>
    </StyledSection>
  );
}
