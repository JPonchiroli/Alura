import styled from "styled-components";
import Input from "../Input";
import DropDown from "../DropDown";
import Button from "../Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const FormContainer = styled.section`
  display: flex;
  gap: 30px
  flex-wrap: wrap;
  justify-content: center;
  margin: 80px 50px;
`;

const StyledForm = styled.form`
  flex: 1;
  background-color: #f2f2f2;
  border-radius: 20px;
  padding: 36px 64px;
  box-shadow: 8px 8px 16px rgba(0, 0, 0, 0.6);
`;

function Form(props) {
  const [id, setId] = useState();
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");
  const [image, setImage] = useState("");
  const [team, setTeam] = useState("");

  const [teamName, setTeamName] = useState("");
  const [teamColor, setTeamColor] = useState("");

  const onSave = (event) => {
    setId(uuidv4());
    event.preventDefault();
    props.registeredCollaborator({
      id,
      name,
      position,
      image,
      team,
    });
    setName("");
    setPosition("");
    setImage("");
    setTeam("");
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={onSave}>
        <h2>Submit the data to create a collaborator card</h2>
        <Input
          required
          label="Name"
          placeholder="Submit your Name"
          value={name}
          onModify={(value) => setName(value)}
        />
        <Input
          required
          label="Position"
          placeholder="Submit your Position"
          value={position}
          onModify={(value) => setPosition(value)}
        />
        <Input
          label="Image"
          placeholder='Use "https://github.com/yourprofile.png"'
          value={image}
          onModify={(value) => setImage(value)}
        />
        <DropDown
          required
          label="Team"
          itens={props.teams}
          value={team}
          onModify={(value) => setTeam(value)}
        />
        <Button>Create Card</Button>
      </StyledForm>

      <StyledForm
        onSubmit={(event) => {
          setTeamName("");
          setTeamColor("");
          alert("Team Created Successfully");
          event.preventDefault();
          props.registerTeam({ name: teamName, color: teamColor });
        }}
      >
        <h2>Submit the data to create a new Team</h2>
        <Input
          required="true"
          label="Name"
          placeholder="Submit the name of the Team "
          value={teamName}
          onModify={(value) => setTeamName(value)}
        />
        <Input
          type="color"
          required="true"
          label="Team Color"
          placeholder="Submit the team color"
          value={teamColor}
          onModify={(value) => setTeamColor(value)}
        />
        <Button>Create a Team</Button>
      </StyledForm>
    </FormContainer>
  );
}

export default Form;
