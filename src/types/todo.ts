interface IDateOFCreation {
  time: string
  date: string
}

export interface ITodo {
  id: number
  title: string
  body: string
  completed: boolean
  dateOfCreation: IDateOFCreation
}