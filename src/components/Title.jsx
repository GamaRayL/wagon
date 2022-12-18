import styled from "styled-components";

const S = {};
S.Title = styled.h1`
  font-family: "Stalinist One", cursive;
  text-align: center;
  user-select: none;

  @media (max-width: 740px) {
    font-size: 22px;
  }

  ${S.Title} span {
    color: #98002e;
  }
`;

export const Title = () => {
  return (
    <S.Title>
      HACKWAGON<span>22</span>
    </S.Title>
  );
};
