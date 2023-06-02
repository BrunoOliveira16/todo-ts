import React, { useState, FormEvent, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// CSS
import styles from './TaskForm.module.css';

// Interface
import { ITask } from '../../interfaces/Task';

interface Props {
  btnText: string;
  taskList: ITask[];
  setTaskList?: React.Dispatch<React.SetStateAction<ITask[]>>;
  task?: ITask | null;
  handleUpdate?(id: number, title: string, date: string): void;
}

const TaskForm = ({btnText, taskList, setTaskList, task, handleUpdate}: Props) => {
  const [ id, setId ] = useState<number>(0);
  const [ title, setTitle ] = useState<string>("");
  const [ date, setDate ] = useState<Date | null>(null);

  useEffect(() => {
    if(task) {
      setId(task.id);
      setTitle(task.title);
      if (task.date) {
        setDate(new Date(task.date));
      } else {
        setDate(null);
      }
    }
  }, [task])

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(handleUpdate) {
      const isoString = date ? date.toISOString() : "";
      handleUpdate(id, title, isoString)
    } else {
      // Gera um ID aleatório para a nova tarefa
      const id = Math.floor(Math.random() * 1000);
      // Formata a data antes de criar o novo objeto de tarefa
      const isoString = date ? date.toISOString() : "";
      // Cria um novo objeto de tarefa com os valores de ID, título e data
      const newTask: ITask = {id, title, date: isoString}
      // Adiciona a nova tarefa à lista de tarefas existente
      setTaskList!([...taskList, newTask])
      // Limpa os campos do formulário
      setTitle("");
      setDate(null);
    }
  }

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título</label>
        <input 
          type="text" 
          name="title" 
          placeholder="Título da Tarefa" 
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
      </div>
      <div className={styles.input_container}>
        <label htmlFor="date">Data</label>
        <DatePicker 
          className={styles.datepicker}
          selected={date} 
          name="date"  
          onChange={(date: Date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
          placeholderText="Data da Tarefa"
        />
      </div>
      <input type="submit" value={btnText} />
    </form>
  );
};

export default TaskForm;




