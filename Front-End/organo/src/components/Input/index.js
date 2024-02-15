import styled from "styled-components";

const InputContainer = styled.div`
  margin: 24px 0;
`;

const InputLabel = styled.label`
  display: block;
  margin-bottom: 8px;
  font-size: 28px;
`;

const StyledInput = styled.input`
  background-color: #fff;
  box-shadow: 10px 10px 30px rgba(0, 0, 0, 0.6);
  width: 100%;
  border: none;
  border-radius: 10px;
  font-size: 24px;
  padding: 24px;
  box-sizing: border-box;
`;

function Input(props) {
  const modifiedPlaceholder = `${props.placeholder}...`;

  const onTyping = (event) => {
    props.onModify(event.target.value);
  };

  return props.type !== "color" ? (
    <InputContainer>
      <InputLabel>{props.label}</InputLabel>

      <StyledInput
        type={props.type}
        value={props.value}
        onChange={onTyping}
        required={props.required}
        placeholder={modifiedPlaceholder}
      />
    </InputContainer>
  ) : (
    <InputContainer>
      <InputLabel>{props.label}</InputLabel>

      <StyledInput
        type={props.type}
        value={props.value}
        onChange={onTyping}
        required={props.required}
        placeholder={modifiedPlaceholder}
        style={{padding: '5px 24px', height: '40px'}}
      />
    </InputContainer>
  );
}

export default Input;
