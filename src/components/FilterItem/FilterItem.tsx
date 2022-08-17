import { IFilterItemProps } from './types';
import styles from './FilterItem.module.scss';
import { useAppSelector } from '../../hooks/redux';

const FilterItem = ({ changeFilter, itemName }: IFilterItemProps) => {
  const { filter } = useAppSelector((state) => state.todoReducers);

  const currentClass =
    filter === itemName
      ? `${styles.filter__item} ${styles['filter__item--active']}`
      : styles.filter__item;

  return (
    <li className={currentClass} onClick={(e) => changeFilter(e.currentTarget.innerText)}>
      {itemName}
    </li>
  );
};

export default FilterItem;
