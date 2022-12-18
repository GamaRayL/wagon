import styled from "styled-components";

const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || "row"};
  align-items: ${({ align }) => align || "center"};
  justify-content: ${({ justify }) => justify || "center"};
  margin: ${({ margin }) => margin || "0"};
  height: ${({ height }) => height || "auto"};
  gap: ${({ gap }) => gap || "inherit"};

`;

export const Flex = (props) => {
  return <StyledFlex {...props} />;
};
