import styled from "styled-components";
import tags from "./tags.json";

const TagsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: 64px;
  margin-top: 56px;
`;

const TitleTag = styled.h3`
  color: #d9d9d9;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const StyledDiv = styled.div`
  display: flex;
  gap: 24px;
  justify-content: end;
`;

const Tag = styled.button`
  font-size: 24px;
  color: #ffffff;
  background: rgba(217, 217, 217, 0.3);
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  padding: 12px;
  box-sizing: border-box;
  border: 2px solid transparent;
  &:hover {
    border-color: #c98cf1;
  }
`;

export default function Tags() {
  return (
    <TagsContainer>
      <TitleTag>Search by Tags</TitleTag>
      {tags.map((tag) => (
        <StyledDiv>
          <Tag key={tag.id}>{tag.titulo}</Tag>
        </StyledDiv>
      ))}
    </TagsContainer>
  );
}
