import { useAppDispatch } from '../../hooks/redux';
import { generateUUI } from '../../library/functions';
import { todoSlice } from '../../store/reducers/TodoSlice';
import FilterItem from '../FilterItem';
import styles from './TodoFilter.module.scss';

const filters = ['All', 'Not done', 'Done'];

const TodoFilter = () => {
  const dispatch = useAppDispatch();
  const { setFilter } = todoSlice.actions;

  const changeFilter = (filterName: string) => {
    dispatch(setFilter(filterName));
  };

  return (
    <ul className={styles.filter}>
      {filters.map((item) => (
        <FilterItem key={generateUUI()} changeFilter={changeFilter} itemName={item} />
      ))}
    </ul>
  );
};

export default TodoFilter;
