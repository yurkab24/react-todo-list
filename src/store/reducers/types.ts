export interface IItemTodo {
  id: number;
  title: string;
  text: string;
  time: string;
  isDone: boolean;
}

export interface ITodo {
  listTodo: IItemTodo[];
  filter: string;
}
