import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
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
}

const TaskForm = ({btnText, taskList, setTaskList}: Props) => {
  const [ id, setId ] = useState<number>(0);
  const [ title, setTitle ] = useState<string>("");
  const [ date, setDate ] = useState<Date | null>(null);

  const addTaskHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Gera um ID aleatório para a nova tarefa
    const id = Math.floor(Math.random() * 1000);

    // Formata a data antes de criar o novo objeto de tarefa
    const formattedDate = date ? formatDate(date) : "";

    // Cria um novo objeto de tarefa com os valores de ID, título e data
    const newTask: ITask = {id, title, date: formattedDate}

    // Adiciona a nova tarefa à lista de tarefas existente
    setTaskList!([...taskList, newTask])

    // Limpa os campos do formulário
    setTitle("");
    setDate(null);
  }

  // Define a função formatDate para formatar um objeto Date como uma string
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

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