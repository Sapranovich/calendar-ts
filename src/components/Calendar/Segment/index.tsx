import React from "react";
import { useSelector } from "react-redux";
import SegmentGroup, { IGroupProps } from "./SegmentGroup";
import verificationFilterInput from "../../../services/verificationFilterInput";
import getDateInFormat from '../../../services/getDateInFormat';
import validationFilterForm, {IValidationFilterFormErrors, IValidationFilterFormProps } from "../../../services/validationFilterForm";
import { IUserMessageData } from "../../../redux/messages/messagesActions";

function Segment() {
  const { isNoMessages, messages } = useSelector((store: any) => store.messages);

  const [messagesLocalStorage, setMessagesLocalStorage] = React.useState(messages);
  const [errorsFilter, setErrorsFilter] = React.useState<IValidationFilterFormErrors>({});
  const [paramsFilter, setParamFilter] = React.useState<IValidationFilterFormProps>({
    startParam: "",
    endParam: "",
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setParamFilter({
      ...paramsFilter,
      [event.target.name]: verificationFilterInput(event.target.value)
    })
    setErrorsFilter({
      ...errorsFilter,
      [event.target.name]:'',
      worning:''
    })
  };

  const handleSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    const { isValid, errors } = validationFilterForm(paramsFilter);
    if(isValid){
      const arrayStartParam = paramsFilter.startParam.split('/');
      const arrayEndParam = paramsFilter.endParam.split('/');
      let indexStartParam = new Date(+arrayStartParam[2], +arrayStartParam[1]-1 ,+arrayStartParam[0]).getTime();
      let indexEndParam = new Date(+arrayEndParam[2], +arrayEndParam[1]-1 ,+arrayEndParam[0]).getTime();

      if(indexStartParam < indexEndParam){
        [indexStartParam, indexEndParam] = [indexEndParam, indexStartParam];
        setParamFilter({
          ...paramsFilter,
          startParam: paramsFilter.endParam,
          endParam: paramsFilter.startParam
        })
        setErrorsFilter({
          ...errorsFilter,
          worning:'Даты были поменяны местами'
        });
      }
      const filteredData = messages.filter((el:IUserMessageData)=>  el.id <= indexStartParam && el.id >= indexEndParam);
      setMessagesLocalStorage(filteredData)
    }else{
      setErrorsFilter(errors);
    }
  };

  return (
    <div className="segment">
      <div className="segment__header border_bottom">
      {/* возможно нужно разбить на доп компоненты ??? */}
      <h3 className="segment__header-title">
        {messagesLocalStorage.length > 1  && `Заметки в период с ${getDateInFormat(messagesLocalStorage[0].id)} по ${getDateInFormat(messagesLocalStorage[messagesLocalStorage.length-1].id)}`}
        {messagesLocalStorage.length === 1  && `Заметки за ${getDateInFormat(messagesLocalStorage[0].id)} число`}
        {messagesLocalStorage.length === 0  && `Заметки отсутствуют`}
        </h3>
        {!isNoMessages && (
          <form className="filter-messages-form" onSubmit={handleSubmitForm}>
            {errorsFilter.worning && (
              <div className="filter-messages-form__worning-feedback">
                {errorsFilter.worning}
              </div>
            )}
            <div className="filter-messages-form__group">
              <input
                className="filter-messages-form__input"
                type="text"
                name="startParam"
                value={paramsFilter.startParam}
                onChange={handleInputChange}
              />
              {errorsFilter.startParam && (
              <div className="filter-messages-form__worning-feedback">
                {errorsFilter.startParam}
              </div>
            )}
            </div>
            <div className="filter-messages-form__group">
              <input
                className="filter-messages-form__input"
                type="text"
                name="endParam"
                value={paramsFilter.endParam}
                onChange={handleInputChange}
              />
              {errorsFilter.endParam && (
              <div className="filter-messages-form__worning-feedback">
                {errorsFilter.endParam}
              </div>
            )}
            </div>
            <button className="filter-messages-form__button">filter</button>
          </form>
        )}
      </div>
      {!isNoMessages && messagesLocalStorage && (
        <React.Fragment>
          {messagesLocalStorage.map((group: IGroupProps, index: number) => (
            <SegmentGroup key={index} group={group} index={index} />
          ))}
        </React.Fragment>
      )}
    </div>
  );
}

export default Segment;
