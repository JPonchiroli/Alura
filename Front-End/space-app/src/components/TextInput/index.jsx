import styled from "styled-components"
import search from '/icons/search.png'

const StyledContainer = styled.div`
  position: relative;
  display: inline-block;
`

const StyledInput = styled.input`
  height: 56px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 2px solid;
  border-color: #C98CF1;
  background: transparent;
  box-sizing: border-box;
  width: 566px;
  color: #D9D9D9;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
`

const LupeIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 38px;
  height: 38px;
`

export default function TextInput(props) {
  return (
    <StyledContainer>
      <StyledInput placeholder="What are you looking for?" {...props}/>
      <LupeIcon src={search}  alt="Lupe Icon"/>
    </StyledContainer>
  )
}