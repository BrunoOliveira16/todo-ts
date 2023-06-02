// Interfaces
import { ITask } from "../../interfaces/Task";
// CSS
import styles from './taskList.module.css';
// Icons
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void
}

const TaskList = ({taskList, handleDelete}: Props) => {
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>{task.date}</p>
            </div>
            <div className={styles.actions}>
              <BsPencilSquare />
              <BsTrash onClick={() => {
                handleDelete(task.id)
              }}/>
            </div>
          </div>
        ))
      ) : (
        <p>Não há tarefas cadastradas!</p>
      )}
    </>
  );
};

export default TaskList;