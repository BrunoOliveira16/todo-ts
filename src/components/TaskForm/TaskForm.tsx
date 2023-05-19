import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// CSS
import styles from './TaskForm.module.css';

// Interface
import { ITask } from '../../interfaces/Task';

interface Props {
  btnText: string;
}

const TaskForm = ({btnText}: Props) => {
  const [ id, setId ] = useState<number>(0);
  const [ title, setTitle ] = useState<string>("");
  const [ date, setDate ] = useState<Date>();

  const addTaskHandler = () => {}

  // Fomatação da Data
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  const formattedDate = date ? formatDate(date) : "";

  console.log(title)
  console.log(formattedDate)

  return (
    <form onSubmit={addTaskHandler} className={styles.form}>
      <div className={styles.input_container}>
        <label htmlFor="title">Título</label>
        <input 
          type="text" 
          name="title" 
          placeholder="Título da Tarefa" 
          onChange={(e) => setTitle(e.target.value)}
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