import styled from 'styled-components'
import FbIcon from '../../images/fb.png'
import IgIcon from '../../images/ig.png'
import TwIcon from '../../images/tw.png'

const IconsContainer = styled.div`
    display: flex;
`

const Icon = styled.img`
    height: 50%;
    margin-right: 30px;
`

function Icons() {
    return(
        <IconsContainer>
            <Icon src={FbIcon} alt='Facebook'/>
            <Icon src={TwIcon} alt='Twitter'/>
            <Icon src={IgIcon} alt='Instagram'/>        
        </IconsContainer>
    )
}

export default Icons