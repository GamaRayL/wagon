import { Flex } from "./Flex";
import styled from "styled-components";

const S = {};
S.Error = styled.h2`
  font-size: 20px;
`;
S.Box = styled.div`
  width: 524px;
  height: 418px;
`;
S.Image = styled.img`
  width: auto;
`;

export const Error = ({ error }) => {
  return (
    <Flex direction="column">
      <S.Box>
        <S.Image src="/images/error.svg" alt="error" />
      </S.Box>
      <S.Error>{error}</S.Error>
    </Flex>
  );
};
