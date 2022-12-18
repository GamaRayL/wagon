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
  const [searchStation, setSearchStation] = useState();

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
        `http://openarc.ru/prognosis/rest/prognosis/station?roadid=${road}&dp_id=${roadRegion}&st_code=${station}`
      )
      .then((res) => {
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
          />
          <Input
            id={2}
            settings
            placeholder="Станция назначения"
            value={valueTo}
            onChange={setValueTo}
            modal={setModalActive}
            fetchID={setActualID}
          />
          <Button img={true} labelTranslate>Получить</Button>
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
                <label htmlFor="radio1">
                  1
                  <input
                    type="radio"
                    name="station"
                    id="radio1"
                    onChange={(e) => setSearchStation(e)}
                  />
                </label>
                <label htmlFor="radio2">
                  2
                  <input
                    type="radio"
                    name="station"
                    id="radio2"
                    onChange={(e) => setSearchStation(e)}
                  />
                </label>
                <label htmlFor="radio3">
                  3
                  <input
                    type="radio"
                    name="station"
                    id="radio3"
                    onChange={(e) => setSearchStation(e)}
                  />
                </label>
              </div>
            )}
            <Button
              onClick={onClickAddStHandler}
              absolute
              bottom="20px"
              right="20px"
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
