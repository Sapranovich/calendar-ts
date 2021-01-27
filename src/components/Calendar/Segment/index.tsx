import React, { forwardRef } from "react";
import { useSelector } from "react-redux";
import SegmentGroup, { IGroupProps } from "./SegmentGroup";

function Segment() {
  const { isNoMessages, messages } = useSelector(
    (store: any) => store.messages
  );

  const [messagesLocalStorage, setMessagesLocalStorage] = React.useState(
    messages
  );


  const [paramsFilter, setParamFilter] = React.useState({
    startParam: "",
    endParam: "",
  });




  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    
    setParamFilter({
      ...paramsFilter,
      [event.target.name]: event.target.value
    })

    // validationSegment(event.target.value)
  };

  React.useEffect(() => {
    console.log(messagesLocalStorage);
  }, []);

  const handleSubmitForm = () => {};

  return (
    <div className="segment">
      <div className="segment__header border_bottom">
        <h3 className="segment__header-title">Все заметки</h3>
        {!isNoMessages && (
          <form className="filter-messages-form" onSubmit={handleSubmitForm}>
            <input
              className="filter-messages-form__input"
              type="text"
              name="startParam"
              value={paramsFilter.startParam}
              onChange={handleInputChange}
            />
            <input
              className="filter-messages-form__input"
              type="text"
              name="endParam"
              value={paramsFilter.endParam}
              onChange={handleInputChange}
            />
            <button className="filter-messages-form__button">filter</button>
          </form>
        )}
      </div>
      {!isNoMessages && (
        <React.Fragment>
          {messages.map((group: IGroupProps, index: number) => (
            <SegmentGroup key={index} group={group} index={index} />
          ))}
        </React.Fragment>
      )}
    </div>
  );
}

export default Segment;
