export interface IStandartTypesStore{
  isOpenModal: boolean
  calendarDate: Date
  currentDate: Date
  selectedDate: Date
  idSelectedDate: number
  storeMessages: { [key: number]: Array<string | null> } 
  dataChangeMessage : DataChangeMessageTypes
}

interface DataChangeMessageTypes{
  currentHour: number | null
  text: string
}


export interface ICalendarProps{
  store: IStandartTypesStore
  getStore: React.Dispatch<IStandartTypesStore>
}

export interface IToDoListItemProps{
  store: IStandartTypesStore
  getStore: React.Dispatch<IStandartTypesStore>
  data: string | null 
  hour: number
}