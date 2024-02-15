import { Link } from "react-router-dom";
import logo from '../../images/logo.png'
import HeaderLink from "../HeaderLink";
import styled from "styled-components";

const StyledHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1.1em 20em;
    background-color: var(--black);
`

export default function Header() {
    return (
        <StyledHeader>
            <Link>
                <img src={logo} alt="Cine Tag Logo" />
            </Link>
            <nav>
                <HeaderLink url='./'>
                    Home
                </HeaderLink>
                <HeaderLink url='./Favorites'>
                    Favorites
                </HeaderLink>
            </nav>
        </StyledHeader>
    )
}