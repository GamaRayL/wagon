import styled from "styled-components";

const S = {};
S.Total = styled.div`
  font-size: 18px;

  @media (max-width: 480px) {
    font-size: 16px;
  }
`;
S.Item = styled.div`
  display: grid;
  grid-template-columns: 4fr 1fr;
  border-bottom: 1px dotted #c6c6c6;
  overflow: hidden;
`;
S.Property = styled.span`
  max-width: 500px;
  font-weight: bold;
  padding-bottom: 6px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
S.Value = styled.span`
  max-width: 150px;
  width: max-content;
  font-style: italic;
  justify-self: end;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
S.Line = styled.div`
  border-bottom: 1px solid #ff7313;
  margin-bottom: 10px;
`;

export const Total = ({ total }) => {
  return (
    <S.Total>
      <S.Line></S.Line>
      <S.Item>
        <S.Property>Расчётное время в пути: </S.Property>
        <S.Value>{total.title}</S.Value>
      </S.Item>
      <S.Item>
        <S.Property>Расчётное</S.Property>
        <S.Value>dsds</S.Value>
      </S.Item>
      <S.Item>
        <S.Property>
          Расчётное время в пути:dsssssssssssssssssssssssssss sdsdsd{" "}
        </S.Property>
        <S.Value>{total.title}</S.Value>
      </S.Item>
      <S.Item>
        <S.Property>
          Расчётноеdsdsdsdsdsdsdsdsdsdsdsdsdsdsdsds время в пути:{" "}
        </S.Property>
        <S.Value>{total.title}</S.Value>
      </S.Item>
      <S.Item>
        <S.Property>Расчётное время в пути: </S.Property>
        <S.Value>
          sddddddddddddddddddddddddddddddddddddddddddddddddddddd
        </S.Value>
      </S.Item>
      <S.Item>
        <S.Property>Расчётное время в пути: </S.Property>
        <S.Value>{total.title}</S.Value>
      </S.Item>
    </S.Total>
  );
};
