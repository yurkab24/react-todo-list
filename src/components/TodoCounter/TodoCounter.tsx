import { useAppSelector } from '../../hooks/redux';
import styles from './TodoCounter.module.scss';

const TodoCounter = () => {
  const { listTodo } = useAppSelector((state) => state.todoReducers);

  const done = listTodo.filter((todoItem) => todoItem.isDone).length;

  return (
    <div className={styles.coluter}>
      <span>Done:</span>
      <span>
        {done}/{listTodo.length}
      </span>
    </div>
  );
};

export default TodoCounter;
