import styled from "styled-components"

const StyledFooter = styled.footer`
    display: flex;
    justify-content: center;
    background-color: var(--black);
`

const FooterText = styled.h2`
    font-weight: 400;
    font-size: 18px;
    color: var(--white);
`

export default function Footer() {
    return (
        <StyledFooter>
            <FooterText>Develop with Alura.</FooterText>
        </StyledFooter>
    )
}