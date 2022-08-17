import { FormEvent, useState } from 'react';
import { useAppDispatch } from '../../hooks/redux';
import { generateUUI, getCurrentTime } from '../../library/functions';
import { todoSlice } from '../../store/reducers/TodoSlice';
import styles from './TodoForm.module.scss';

const MIN_LENGTH_TITLE = 5;
const MIN_LENGTH_TEXT = 3;
const MAX_LENGTH_TEXT = 130;

const ERROR_TITLE_MSG = `Min title length ${MIN_LENGTH_TITLE}`;
const ERROR_TEXT_MSG = `Min text length ${MIN_LENGTH_TEXT} and max length ${MAX_LENGTH_TEXT}`;

const TodoForm = () => {
  const dispatch = useAppDispatch();
  const { addTodoItem } = todoSlice.actions;

  const [title, setTitle] = useState<string>('');
  const [text, setText] = useState<string>('');
  const [errorTitle, setErrorTitle] = useState<string>('');
  const [errorText, setErrorText] = useState<string>('');
  const [isSubmit, setIsSubmit] = useState<boolean>(false);

  const addItemTodo = (e: FormEvent) => {
    e.preventDefault();

    if (title.length < MIN_LENGTH_TITLE) {
      setErrorTitle(ERROR_TITLE_MSG);
    } else {
      setErrorTitle('');
    }

    if (text.length < MIN_LENGTH_TEXT || text.length > MAX_LENGTH_TEXT) {
      setErrorText(ERROR_TEXT_MSG);
    } else {
      setErrorText('');
    }

    if (
      title.length < MIN_LENGTH_TITLE ||
      text.length < MIN_LENGTH_TEXT ||
      text.length > MAX_LENGTH_TEXT
    ) {
      setIsSubmit(true);
      return;
    }

    const itemTodo = {
      id: generateUUI(),
      title,
      text,
      time: getCurrentTime(),
      isDone: false,
    };

    setErrorTitle('');
    setErrorText('');
    setTitle('');
    setText('');
    setIsSubmit(false);

    dispatch(addTodoItem(itemTodo));
  };

  return (
    <form className={styles.form}>
      <label>
        <input
          onInput={(e: FormEvent<HTMLInputElement>) => {
            if (e.currentTarget.value.length < MIN_LENGTH_TITLE && isSubmit) {
              setErrorTitle(ERROR_TITLE_MSG);
            } else {
              setErrorTitle('');
            }

            setTitle(e.currentTarget.value);
          }}
          value={title}
          className={styles.form__input}
          type="text"
          placeholder="Title"
        />
        <div className={styles.error_msg}>{errorTitle}</div>
      </label>
      <label>
        <textarea
          onChange={(e: FormEvent<HTMLTextAreaElement>) => {
            if (
              (e.currentTarget.value.length < MIN_LENGTH_TEXT ||
                e.currentTarget.value.length > MAX_LENGTH_TEXT) &&
              isSubmit
            ) {
              setErrorText(ERROR_TEXT_MSG);
            } else {
              setErrorText('');
            }

            setText(e.currentTarget.value);
          }}
          value={text}
          className={styles.form__textarea}
          placeholder="Text"
          rows={2}
        />
        <div className={styles.error_msg}>{errorText}</div>
      </label>
      <button onClick={addItemTodo} className={styles.form__button}>
        Add task
      </button>
    </form>
  );
};

export default TodoForm;
