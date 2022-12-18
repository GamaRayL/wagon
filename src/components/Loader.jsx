import styled from "styled-components";

const S = {};
S.Container = styled.div`
  width: 40px;
  height: 40px;
  background: transparent url(/images/wagon.svg);
  animation: wagon 4s ease-in-out infinite;

  @keyframes wagon {
    50% {
      width: 100%;
    }
    100% {
      left: unset;
    }
  }
`;

export const Loader = () => {
  return <S.Container></S.Container>;
};
