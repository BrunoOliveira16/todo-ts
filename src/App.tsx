import { useState } from 'react';

// CSS
import styles from './App.module.css';

// Components
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';

// Interface
import { ITask } from './interfaces/Task';

function App() {
  const [ taskList, setTaskList ] = useState<ITask[]>([]);

  return (
      <div>
        <Header />
        <main className={styles.main}>
          <div>
            <h2>O que você vai fazer?</h2>
            <TaskForm 
              btnText="Criar Tarefa" 
              taskList={taskList}
              setTaskList={setTaskList}
            />
          </div>
          <div>
            <h2>Suas Tarefas:</h2>
            <TaskList />
          </div>
        </main>
        <Footer />
      </div>
  );
};

export default App;
