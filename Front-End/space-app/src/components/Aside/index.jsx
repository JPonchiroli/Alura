import styled from "styled-components";
import NavigationItem from "./NavigationItem";

const StyledList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

export default function Aside() {
  return (
    <aside>
      <nav>
        <StyledList>
          <NavigationItem
            title="Home"
            iconActive="icons/home-ativo.png"
            iconInactive="icons/home-inativo.png"
            active={true}
          />
          <NavigationItem
            title="Most Seens"
            iconActive="icons/mais-vistas-ativo.png"
            iconInactive="icons/mais-vistas-inativo.png"
            active={false}
          />
          <NavigationItem
            title="Most Liked"
            iconActive="icons/mais-curtidas-ativo.png"
            iconInactive="icons/mais-curtidas-inativo.png"
            active={false}
          />
          <NavigationItem
            title="News"
            iconActive="icons/novas-ativo.png"
            iconInactive="icons/novas-inativo.png"
            active={false}
          />
          <NavigationItem
            title="Surprise Me"
            iconActive="icons/surpreenda-me-ativo.png"
            iconInactive="icons/surpreenda-me-inativo.png"
            active={false}
          />
        </StyledList>
      </nav>
    </aside>
  );
}
