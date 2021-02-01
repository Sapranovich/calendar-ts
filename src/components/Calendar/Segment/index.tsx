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
  React.useEffect(()=>{
    setMessagesLocalStorage(messages);
  },[messages])

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
          worning:'Dates are swapped'
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
      {/* возможно нужно вынести filter в отдельный компонент ??? */}
      <h2 className="segment__header-title">
        {messagesLocalStorage.length > 1  && `Notes from ${getDateInFormat(messagesLocalStorage[0].id)} to ${getDateInFormat(messagesLocalStorage[messagesLocalStorage.length-1].id)}`}
        {messagesLocalStorage.length === 1  && `Notes for the ${getDateInFormat(messagesLocalStorage[0].id)}`}
        {messagesLocalStorage.length === 0  && `No notes`}
        </h2>
        {!isNoMessages && (
          <form className="filter-messages-form" onSubmit={handleSubmitForm}>
              <div className="filter-messages-form__worning-feedback">
                {errorsFilter.worning && errorsFilter.worning}
              </div>
               <div className="filter-messages-form__wrapper">
               <div className="filter-messages-form__group">
              <input
                className="filter-messages-form__input"
                type="text"
                name="startParam"
                value={paramsFilter.startParam}
                onChange={handleInputChange}
                placeholder='dd/mm/yyyy'
              />
              <div className="filter-messages-form__error-feedback">
                {errorsFilter.startParam && errorsFilter.startParam}
              </div>
            </div>
            <div className="filter-messages-form__group">
              <input
                className="filter-messages-form__input"
                type="text"
                name="endParam"
                value={paramsFilter.endParam}
                onChange={handleInputChange}
                placeholder='dd/mm/yyyy'
              />
              <div className="filter-messages-form__error-feedback">

                {errorsFilter.endParam && errorsFilter.endParam}
              </div>
            </div>
               </div>
               <button className="button button__prim filter-messages-form__button">filter</button>
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
