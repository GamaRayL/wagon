import styled from "styled-components";

const S = {};
S.AppBar = styled.div`
  height: 180px;
  padding: 60px;
`;
S.Box = styled.div`
  width: 160px;
  height: 88px;
`;
S.Image = styled.img`
  width: auto;
`;

export const AppBar = () => {
  return (
    <S.AppBar>
      <S.Box>
        <S.Image src="/images/logo.svg" alt="logo" />
      </S.Box>
    </S.AppBar>
  );
};
