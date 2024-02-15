import styled from "styled-components";
import Collaborator from "../Collaborator";
import hexToRgba from "hex-to-rgba";
import Background from '../../images/fundo.png'

const TeamContainer = styled.section`
  text-align: center;
  padding: 32px;
  position: relative;
`;

const Title = styled.h3`
  font-size: 32px;
  border-bottom: solid 4px;
  display: inline-block;
  padding-bottom: 8px;
`;

const Collaborators = styled.div`
  display: flex;
  justify-content: space-around;
  ]margin-top: 32px;
  flex-wrap: wrap;
`;

const StyledInput = styled.input`
  position: absolute;
  top: 20px;
  right: 50px;
`;

function Team(props) {
  return props.collaborators.length > 0 ? (
    <TeamContainer style={{ backgroundImage: `url(${Background})`,backgroundColor: hexToRgba(props.color, '0.4')}}>
      <StyledInput
        onChange={(event) => props.changeColor(event.target.value, props.id)}
        value={props.color}
        type="color"
      />
      <Title style={{ borderColor: props.color }}>{props.name}</Title>
      <Collaborators>
        {props.collaborators.map((collaborator) => {
          return (
            <Collaborator
              backgroundColor={props.color}
              key={collaborator.name}
              name={collaborator.name}
              position={collaborator.position}
              image={collaborator.image}
              onDelete={props.onDelete}
            />
          );
        })}
      </Collaborators>
    </TeamContainer>
  ) : (
    ""
  );
}

export default Team;
