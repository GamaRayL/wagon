import styled from "styled-components";

const S = {};
S.Modal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #00000030;
  transition: 0.4s;
  opacity: ${(props) => (props.active ? "1" : "0")};
  pointer-events: ${(props) => (props.active ? "all" : "none")};
`;
S.Content = styled.div`
  width: 20vw;
  height: 34vh;
  padding: 20px;
  border-radius: 12px;
  background-color: white;
  transition: 0.3s all;
  transform: ${(props) => (props.active ? "scale(0.5)" : "scale(1)")};
`;

export const Modal = (props) => {
  const { active, setActive, children } = props;
  console.log(active);

  return (
    <S.Modal onClick={() => setActive(false)} {...props}>
      <S.Content onClick={(e) => e.stopPropagation()}>{children}</S.Content>
    </S.Modal>
  );
};
