import styled from "styled-components"

const Label = styled.label`
    display: block;
    margin-bottom: 8px;
    font-size: 28px;    
`

const Select = styled.select`
    background-color: #FFF;
    box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.6);
    width: 100%;
    border: none;
    border-radius: 10px;
    font-size: 24px;
    padding: 24px;
    box-sizing: border-box;
`

function DropDown(props) {

    return (
        <div>
            <Label>{props.label}</Label>
            <Select onChange={event => props.onModify(event.target.value)} required={props.required} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </Select>
        </div>
    )
}

export default DropDown