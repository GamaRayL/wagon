import styled from "styled-components";

const S = {};
S.Slogan = styled.div`
  position: absolute;
  font-size: 100px;
  color: #c6c6c625;
  z-index: -1;
  text-transform: uppercase;
  font-family: "Stalinist One", cursive;
  margin: 0 auto;
  left: 0;
  right: 0;
  bottom: 0;
  text-align: center;
  user-select: none;

  @media (max-width: 1200px) {
    font-size: 60px;
  }

  @media (max-width: 740px) {
    font-size: 30px;
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

export const Slogan = () => {
  return (
    <S.Slogan>
      Веди
      <br />
      индустрию
      <br />
      за собой
    </S.Slogan>
  );
};
