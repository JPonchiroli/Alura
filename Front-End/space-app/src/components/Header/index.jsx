import styled from "styled-components"
import TextInput from "../TextInput"

const StyledHeader = styled.header`
  padding: 60px 0;
  display: flex;
  justify-content: space-between;

  img{
    max-width: 212px;
  }
`

export default function Header() {
  return(
    <StyledHeader>
      <img src="/images/logo.png" alt="Logo"/>
      <TextInput />
    </StyledHeader>
  )
}