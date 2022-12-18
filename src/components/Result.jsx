import styled from "styled-components";
import { Error, Total } from "components/";

const S = {};
S.Result = styled.div`
  flex-wrap: wrap;
  align-self: flex-start;
`;

export const Result = ({ error, total }) => {
  return (
    <S.Result>
      {error || total ? (
        total ? (
          <Total total={total} />
        ) : (
          <Error error={error} />
        )
      ) : null}
    </S.Result>
  );
};
