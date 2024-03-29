import styled from 'styled-components'

const SubmitButton = styled.button`
    background-color: #6278f7;
    border-radius: 10px;
    font-weight: 700;
    font-size: 18px;
    padding: 32px;
    border: none;
    cursor: pointer;
    color: #fff;
    margin: 32px 0;
    &:hover{
        color: #95ffd4;
    }
`

function Button(props) {
    return (
        <SubmitButton>{props.children}</SubmitButton>
    )
}

export default Button