import styled from "styled-components";
import { IoIosCloseCircle } from "react-icons/io";

const CollaboratorContainer = styled.div`
  position: relative;
  width: 280px;
`;
const CollaboratorHeader = styled.div`
  background-color: #f0f0f0;
  border-radius: 10px 10px 0px 0px;
`;
const CollaboratorImage = styled.img`
  width: 100px;
  border-radius: 50%;
  position: relative;
  bottom: -50px;
`;

const CollaboratorFooter = styled.div`
  background: #ffffff;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.08);
  border-radius: 0px 0px 10px 10px;
  padding-top: 90px;
  padding-bottom: 40px;
`;

const CollaboratorName = styled.h4`
  color: #6278f7;
  font-size: 18px;
  line-height: 22px;
  font-weight: bold;
  margin-bottom: 8px;
`;

const CollaboratorPosition = styled.h5`
  font-size: 18px;
  line-height: 22px;
  color: #212121;
  padding: 0 16px;
`;

const Delete = styled.div`
  position: absolute;
  right: -10px;
  top: -10px;
`;

function Collaborator({
  id,
  name,
  position,
  image,
  backgroundColor,
  onDelete,
}) {
  return (
    <CollaboratorContainer>
      <Delete>
        <IoIosCloseCircle size={25} onClick={() => onDelete(id)} />
      </Delete>
      <CollaboratorHeader style={{ backgroundColor: backgroundColor }}>
        <CollaboratorImage src={image} alt="Profile" />
      </CollaboratorHeader>
      <CollaboratorFooter>
        <CollaboratorName>{name}</CollaboratorName>
        <CollaboratorPosition>{position}</CollaboratorPosition>
      </CollaboratorFooter>
    </CollaboratorContainer>
  );
}

export default Collaborator;
