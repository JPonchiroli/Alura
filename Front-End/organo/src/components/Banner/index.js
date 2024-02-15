import styled from 'styled-components'
import BannerImg from '../../images/banner.png'

const Header = styled.header`
    background-color: #6278f7;
    text-align: center;
`

const Image = styled.img`
    max-width: 100%;
`

function Banner() {
    return (
        <Header>
            <Image src={BannerImg} alt='Banner' />
        </Header>
    )
}

export default Banner