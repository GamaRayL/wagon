import { useState } from "react";
import { Button, Flex, Input, Result, Loader, Modal } from "components";
import axios from "axios";
import styled from "styled-components";

const S = {};
S.Widget = styled.div`
  max-width: 672px;

  @media (max-width: 740px) {
    width: 100%;
  }
`;
S.Form = styled.form`
  display: flex;
  gap: 16px;
  margin-bottom: 60px;

  @media (max-width: 740px) {
    flex-direction: column;
  }
`;
S.ModalForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
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
  max-width: 300px;
  width: max-content;
  font-style: italic;
  justify-self: end;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
S.Item = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  border-bottom: 1px dotted #c6c6c6;
  overflow: hidden;
  margin: 4px;

  :hover {
    cursor: pointer;
    background-color: #c6c6c630;
  }
`;

export const Widget = () => {
  const [actualID, setActualID] = useState();
  const [total, setTotal] = useState();
  const [valueFrom, setValueFrom] = useState();
  const [valueTo, setValueTo] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [anLoading, setAnLoading] = useState(false);
  const [error, setError] = useState();
  const [modalActive, setModalActive] = useState(false);
  const [road, setRoad] = useState();
  const [roadRegion, setRoadRegion] = useState();
  const [station, setStation] = useState();
  const [arStation, setArStation] = useState();

  const onSubmitStationHandler = (e) => {
    setIsLoading(true);
    e.preventDefault();
    e.target.reset();
    console.log(valueFrom, valueTo);
    axios
      .get(
        `prognosis/rest/prognosis/fact?st_code_snd=${valueFrom}&st_code_rsv=${valueTo}`
      )
      .then((res) => {
        setIsLoading(false);
        setTotal(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        setError(error.message);
      });
  };

  const onSubmitSearchHandler = (e) => {
    e.preventDefault();
    setAnLoading(true);
    axios
      .get(
        `prognosis/rest/prognosis/station?roadid=${road}&dp_id=${roadRegion}&st_code=${station}`
      )
      .then((res) => {
        setArStation(res.data);
        console.log(res);
        setAnLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError(error.message);
        setAnLoading(false);
      });
  };

  const onClickAddStHandler = (e) => {
    console.log(e);

    switch (actualID) {
      case 1:
        setValueFrom("1");
        break;
      case 2:
        setValueTo("2");
        break;
      default:
        break;
    }
    setModalActive(false);
  };

  return (
    <Flex direction="column">
      <S.Widget>
        <S.Form onSubmit={(e) => onSubmitStationHandler(e)}>
          <Input
            id={1}
            settings
            placeholder="Станция отправления"
            value={valueFrom}
            onChange={setValueFrom}
            modal={setModalActive}
            fetchID={setActualID}
            req={true}
          />
          <Input
            id={2}
            settings
            placeholder="Станция назначения"
            value={valueTo}
            onChange={setValueTo}
            modal={setModalActive}
            fetchID={setActualID}
            req={true}
          />
          <Button img={true} labelTranslate>
            Получить
          </Button>
        </S.Form>
        <Modal active={modalActive} setActive={setModalActive}>
          <S.ModalForm onSubmit={(e) => onSubmitSearchHandler(e)}>
            <Input placeholder="Дорога" onChange={setRoad} />
            <Input placeholder="Регион дороги" onChange={setRoadRegion} />
            <Input placeholder="Станция" onChange={setStation} />
            <Button>Поиск</Button>
            {anLoading ? (
              <Loader />
            ) : (
              <div>
                {arStation
                  ? arStation
                      .map((el) => (
                        <S.Item>
                          <S.Property>Станция: </S.Property>
                          <S.Value>{el.station}</S.Value>
                        </S.Item>
                      ))
                      .slice(0, 4)
                  : null}
              </div>
            )}
            <Button
              onClick={onClickAddStHandler}
              absolute
              bottom="20"
              right="20"
            >
              Добавить
            </Button>
          </S.ModalForm>
        </Modal>
        {isLoading ? <Loader /> : <Result error={error} total={total} />}
      </S.Widget>
    </Flex>
  );
};
