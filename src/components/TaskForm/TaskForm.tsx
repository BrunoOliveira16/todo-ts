// CSS
import styles from './TaskForm.module.css';

interface Props {
  btnText: string;
}

const TaskForm = ({btnText}: Props) => {
  return (
    <form className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título</label>
        <input 
          type="text" 
          name="title" 
          placeholder="Título da Tarefa" 
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="date">Data</label>
        <input 
          type="date" 
          name="date" 
          placeholder="Data da Tarefa" 
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;