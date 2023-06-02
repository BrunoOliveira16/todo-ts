// Interfaces
import { ITask } from "../../interfaces/Task";
// CSS
import styles from './taskList.module.css';
// Icons
import { BsPencilSquare, BsTrash } from 'react-icons/bs';

interface Props {
  taskList: ITask[];
  handleDelete(id: number): void;
  handleEdit(task: ITask): void;
}

const TaskList = ({taskList, handleDelete, handleEdit}: Props) => {
  // Função para formatar uma string de data no formato ISO como uma string legível
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };
  
  return (
    <>
      {taskList.length > 0 ? (
        taskList.map((task) => (
          <div key={task.id} className={styles.task}>
            <div className={styles.details}>
              <h4>{task.title}</h4>
              <p>{formatDate(task.date)}</p>
            </div>
            <div className={styles.actions}>
              <BsPencilSquare onClick={() => handleEdit(task)} />
              <BsTrash onClick={() => handleDelete(task.id)} />
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