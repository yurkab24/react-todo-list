import styles from './App.module.scss';
import TodoCounter from './components/TodoCounter';
import TodoFilter from './components/TodoFilter';
import TodoForm from './components/TodoFrom';
import TodoList from './components/TodoList';

function App() {
  return (
    <main className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.box}>
          <TodoForm />
          <TodoCounter />
          <TodoFilter />
        </div>
        <TodoList />
      </div>
    </main>
  );
}

export default App;
