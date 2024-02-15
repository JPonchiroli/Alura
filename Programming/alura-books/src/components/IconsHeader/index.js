import profile from '../../images/profile.svg'
import bag from '../../images/bag.svg'
import styled from 'styled-components'

const icons = [profile, bag]

const Icons = styled.ul`
    display: flex;
    align-items: center;
`

const Icon = styled.li`
    margin-right: 40px;
    width: 25px;
`

function IconsHeader() {
    return (
        <Icons>
            {icons.map((icon) => (
                <Icon><img src={icon} alt='icon'></img></Icon>
            ))}
        </Icons>
    )
}

export default IconsHeader