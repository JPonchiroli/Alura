import { useState } from "react";
import Banner from "./components/Banner";
import Form from "./components/Form";
import Team from "./components/Team";
import Footer from "./components/Footer";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [teams, setTeams] = useState([
    {
      name: "Choose your Team",
    },
    {
      id: uuidv4(),
      name: "Programming",
      color: "#57c278",
    },
    {
      id: uuidv4(),
      name: "Front-End",
      color: "#82cFFa",
    },
    {
      id: uuidv4(),
      name: "Data Science",
      color: "#a6d157",
    },
    {
      id: uuidv4(),
      name: "Devops",
      color: "#e06b69",
    },
    {
      id: uuidv4(),
      name: "UX e Design",
      color: "#db6ebf",
    },
    {
      id: uuidv4(),
      name: "Mobile",
      color: "#ffba05",
    },
    {
      id: uuidv4(),
      name: "Innovation and Management",
      color: "#ff8a29",
    },
  ]);

  const [collaborators, setCollaborators] = useState([]);

  const newCollaboratorAdded = (collaborator) => {
    setCollaborators([...collaborators, collaborator]);
  };

  function deleteCollaborator(id) {
    setCollaborators(
      collaborators.filter((collaborator) => collaborator.id !== id)
    );
  }

  function changeTeamColor(color, id) {
    console.log(id, color)
    setTeams(
      teams.map((team) => {
        if (team.id === id) {
          team.color = color;
        }
        return team;
      })
    );
  }

  function registerTeam(newTeam) {
    setTeams([...teams, {...newTeam, id: uuidv4()} ])
  }

  return (
    <div>
      <Banner />
      <Form
        registerTeam={registerTeam}
        teams={teams.map((team) => team.name)}
        registeredCollaborator={(collaborator) =>
          newCollaboratorAdded(collaborator)
        }
      />
      {teams.map((team) => (
        <Team
          changeColor={changeTeamColor}
          key={team.name}
          name={team.name}
          id={team.id}
          color={team.color}
          collaborators={collaborators.filter(
            (collaborator) => collaborator.team === team.name
          )}
          onDelete={deleteCollaborator}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
