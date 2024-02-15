import styled from "styled-components"
import Icons from "../Icons"
import Logo from '../../images/logo.png'

const FooterContainer = styled.footer`
    background-color: #6278f7;
    display: flex;
    justify-content: space-around;
    padding: 50px;

`

const StyledLogo = styled.img`
    height: 40%;
`

function Footer() {
    return(
        <FooterContainer>
            <Icons />
            <StyledLogo src={Logo} alt="Logo" />
            <h3 style={{ color: '#FFF'}}>Develop By Alura</h3>
        </FooterContainer>
    )
}

export default Footer