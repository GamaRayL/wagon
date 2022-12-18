import styled from "styled-components";

const S = {};
S.InputGroup = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 20px 0 0;
  width: 100%;
  min-width: 240px;
  user-select: none;
`;
S.InputLabel = styled.label`
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 17px;
  color: #9b9b9b;
  pointer-events: none;
`;
S.InputField = styled.input`
  font-family: inherit;
  width: 100%;
  border: none;
  border-bottom: 2px solid #9b9b9b;
  outline: 0;
  font-size: 17px;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    appearance: none;
  }

  ::placeholder {
    color: transparent;
  }

  :placeholder-shown ~ ${S.InputLabel} {
    font-size: 17px;
    cursor: text;
    top: 20px;
  }

  :focus {
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #98002e, #98002e40);
    border-image-slice: 1;
  }

  :focus ~ ${S.InputLabel} {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 17px;
    color: #98002e;
    font-weight: 700;
  }

  :required,
  :invalid {
    box-shadow: none;
  }
`;
S.Icon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;

  :hover {
    transform: rotate(35deg);
    transition: ease-in-out 0.3s;
  }
`;

export const Input = (props) => {
  const { placeholder, onChange, modal, settings, value, fetchID, id } = props;
  const onClickHandler = () => {
    modal(true);
    fetchID(id);
  };
  return (
    <S.InputGroup>
      <S.InputField
        key={id}
        required
        placeholder={placeholder}
        type="number"
        min={0}
        max={3701}
        onChange={(e) => onChange(e.target.value)}
        value={value}
      />
      <S.InputLabel>{placeholder}</S.InputLabel>
      {settings ? (
        <S.Icon onClick={onClickHandler} src="images/menu.svg" alt="settings" />
      ) : null}
    </S.InputGroup>
  );
};
