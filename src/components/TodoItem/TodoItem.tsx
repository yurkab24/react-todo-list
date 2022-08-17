import React from 'react';
import styles from './TodoItem.module.scss';
import iconClose from '../../assets/img/icon-close.svg';
import { useAppDispatch } from '../../hooks/redux';
import { todoSlice } from '../../store/reducers/TodoSlice';
import { ITodoItemProps } from './types';

const TodoItem = ({ id, title, text, time, isDone }: ITodoItemProps) => {
  const dispatch = useAppDispatch();
  const { removeTodoItem, doneTodoItem } = todoSlice.actions;

  const currentClass = isDone ? `${styles.todo__item} ${styles.ready}` : `${styles.todo__item}`;

  const removeItem = (id: number) => {
    dispatch(removeTodoItem(id));
  };

  const doneTask = (id: number) => {
    dispatch(doneTodoItem(id));
  };

  return (
    <li className={currentClass}>
      <img
        className={styles.todo__close}
        src={iconClose}
        alt="remove"
        onClick={() => removeItem(id)}
      />
      <div className={styles.todo__title} onClick={() => doneTask(id)}>
        {title}
      </div>
      <div className={styles.todo__text}>{text}</div>
      <div className={styles.todo__time}>{time}</div>
    </li>
  );
};

export default TodoItem;
