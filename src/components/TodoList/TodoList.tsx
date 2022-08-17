import React from 'react';
import styles from './TodoList.module.scss';
import TodoItem from '../TodoItem';
import { useAppSelector } from '../../hooks/redux';
import { Filters } from '../../enums';
import { generateUUI } from '../../library/functions';
import { IItemTodo } from '../../store/reducers/types';

const todoFilter = (currentFilter: string, listTodo: IItemTodo[]): IItemTodo[] => {
  switch (currentFilter) {
    case Filters.notDone:
      return listTodo.filter((item) => !item.isDone);
    case Filters.done:
      return listTodo.filter((item) => item.isDone);
    default:
      return listTodo;
  }
};

const List = () => {
  const { listTodo, filter } = useAppSelector((state) => state.todoReducers);

  const items = todoFilter(filter, listTodo);

  return (
    <>
      {listTodo.length ? (
        <div className={styles.todo}>
          <ul className={styles.todo__list}>
            {items
              .map((item) => {
                if (item) {
                  return (
                    <TodoItem
                      key={generateUUI()}
                      id={item.id}
                      title={item.title}
                      text={item.text}
                      isDone={item.isDone}
                      time={item.time}
                    />
                  );
                }
              })
              .reverse()}
          </ul>
        </div>
      ) : (
        <div className={styles.todo}>Todo list is empty</div>
      )}
    </>
  );
};

export default List;
