import React from "react";
import { useSelector } from "react-redux";

import IStore from "../../../redux/interfaceStore";
import SegmentGroup from "./SegmentGroup";
import verificationFilterInput from "../../../services/verificationFilterInput";
import getDateInFormat from "../../../services/getDateInFormat";
import validationFilterForm, { ValidationFilterFormPropsType, ValidationFilterFormErrorsType } from "../../../services/validationFilterForm";
import { UserMessageDataType } from '../../../types/messagesDataTypes';
import groupMessagesByDay from "../../../services/groupMessagesByDay";

const Segment = ({ propsMessages }: {propsMessages?: UserMessageDataType[]}): JSX.Element => {
  const { messages } = useSelector((store: IStore) => store.messages);
  
  const [messagesLocalStorage, setMessagesLocalStorage] = React.useState<UserMessageDataType[]>([]);
  const [errorsFilter, setErrorsFilter] = React.useState<ValidationFilterFormErrorsType>({});

  const [paramsFilter, setParamFilter] = React.useState<ValidationFilterFormPropsType>({
    startParam: "",
    endParam: "",
  });

  React.useEffect(() => {
    if(propsMessages){
      setMessagesLocalStorage(propsMessages)
    }else{
      setMessagesLocalStorage(messages)
    }
  }, [messages, propsMessages]);


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParamFilter({
      ...paramsFilter,
      [event.target.name]: verificationFilterInput(event.target.value),
    });
    setErrorsFilter({
      ...errorsFilter,
      [event.target.name]: "",
      warning: "",
    });
  };

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const { isValid, errors } = validationFilterForm(paramsFilter);
    if (isValid) {
      const arrayStartParam = paramsFilter.startParam.split("/");
      const arrayEndParam = paramsFilter.endParam.split("/");
      let indexStartParam = new Date(+arrayStartParam[2], +arrayStartParam[1] - 1, +arrayStartParam[0]).getTime();
      let indexEndParam = new Date(+arrayEndParam[2], +arrayEndParam[1] - 1, +arrayEndParam[0]).getTime();

      if (indexStartParam < indexEndParam) {
        [indexStartParam, indexEndParam] = [indexEndParam, indexStartParam];
        setParamFilter({
          ...paramsFilter,
          startParam: paramsFilter.endParam,
          endParam: paramsFilter.startParam,
        });
        setErrorsFilter({
          ...errorsFilter,
          warning: "Dates are swapped",
        });
      }
      const filteredData = messagesLocalStorage.filter((el: UserMessageDataType) => el.dayId! <= indexStartParam && el.dayId! >= indexEndParam);
      setMessagesLocalStorage(filteredData);
    } else {
      setErrorsFilter(errors);
    }
  };

  const handleResetButtonClick = () => {
    if(propsMessages){
      setMessagesLocalStorage(propsMessages)
    }else{
      setMessagesLocalStorage(messages)
    }
    setErrorsFilter({});
  }

  return (
    <div className="segment">
      <div className="segment__header border_bottom">
        {/* возможно нужно вынести filter в отдельный компонент ??? */}
        <h2 className="segment__header-title">
          {messagesLocalStorage.length > 1 &&
            `Notes from ${getDateInFormat(messagesLocalStorage[0].dayId!)} to ${getDateInFormat(messagesLocalStorage[messagesLocalStorage.length - 1].dayId!)}`}

          {messagesLocalStorage.length === 1 &&
            `Notes for the ${getDateInFormat(messagesLocalStorage[0].dayId!)}`}

          {messagesLocalStorage.length === 0 && `No notes`}
        </h2>
        <form className="filter-messages-form" onSubmit={handleSubmitForm}>

          <div className="filter-messages-form__warning-feedback">{errorsFilter.warning}</div>

          <div className="filter-messages-form__wrapper">
            <div className="filter-messages-form__group">
              <input
                className="filter-messages-form__input"
                type="text"
                name="startParam"
                value={paramsFilter.startParam}
                onChange={handleInputChange}
                placeholder="dd/mm/yyyy"
              />

              <div className="filter-messages-form__error-feedback">{errorsFilter.startParam}</div>

            </div>
            <div className="filter-messages-form__group">
              <input
                className="filter-messages-form__input"
                type="text"
                name="endParam"
                value={paramsFilter.endParam}
                onChange={handleInputChange}
                placeholder="dd/mm/yyyy"
              />

              <div className="filter-messages-form__error-feedback">{errorsFilter.endParam}</div>

            </div>
          </div>
          <div className="filter-messages-form__buttons">
          <button className="button button__prim filter-messages-form__button">
            filter
          </button>
          <button type='button' className="button button__prim filter-messages-form__button" onClick={handleResetButtonClick}>
            reset
          </button>
          </div>
        </form>
      </div>
      {messagesLocalStorage && (
        <React.Fragment>
          {/*  Почему-то не получается вместо any подставить GroupPropsType, при этом в SegmentGroup props типизирован через  GroupPropsType*/}
          {groupMessagesByDay(messagesLocalStorage).map((el: any, index: number) => <SegmentGroup key={index} group={el} /> )}
        </React.Fragment>
      )}
    </div>
  );
};

export default Segment;
