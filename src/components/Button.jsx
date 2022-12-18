import styled from "styled-components";

const S = {};
S.SvgWrapper = styled.div``;
S.Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: inherit;
  font-size: 20px;
  background: #98002e;
  color: white;
  padding: 0.7em 1em;
  padding-left: 0.9em;
  border: none;
  border-radius: 6px;
  transition: all 0.2s;
  cursor: pointer;
  user-select: none;

  position: ${(props) => (props.absolute ? "absolute" : "default")};
  bottom: ${(props) => (props.bottom ? props.bottom : "default")};
  right: ${(props) => (props.right ? props.right : "default")};

  @media (max-width: 480px) {
    font-size: 14px;
  }

  ${S.Button} span {
    display: block;
    margin-left: 0.3em;
    transition: all 0.3s ease-in-out;
  }

  ${S.Button} img {
    display: ${(props) => (props.img ? "block" : "none")};
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  ${S.Button}:hover ${S.SvgWrapper} {
    animation: train 0.6s ease-in-out infinite alternate;
  }

  ${S.Button}:hover img {
    transform: translateX(2.4em) scale(1.1);
  }

  ${S.Button}:hover span {
    transform: ${(props) =>
      props.labelTranslate ? "translateX(3em)" : "inherit"};
    color: #c6c6c6;
  }

  ${S.Button}:active {
    transform: scale(0.95);
  }

  @keyframes train {
    from {
      transform: translateY(0.1em);
    }

    to {
      transform: translateY(-0.1em);
    }
  }
`;

export const Button = (props) => {
  const {
    children,
    onClick,
    img,
    absolute,
    labelTranslate,
    top,
    bottom,
    left,
    right,
  } = props;
  console.log(img);
  return (
    <S.Button onClick={onClick} {...props}>
      <div>
        <S.SvgWrapper>
          <img src="images/train.svg" width={34} alt="train" />
        </S.SvgWrapper>
      </div>
      <span>{children}</span>
    </S.Button>
  );
};
