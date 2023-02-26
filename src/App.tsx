import React, { ChangeEvent, FC, useState } from 'react'
import "./App.css"
import TodoTask from './components/TodoTask'
import { ITask } from './Interfaces'

const App: FC = () => {
  const [task, setTask] = useState<string>("")
  const [deadline, setDeadline] = useState<number>(0)
  const [todo, setTodos] = useState<ITask[]>([])

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.name === "task") {
      setTask(e.target.value)
    } else if (e.target.name === "deadline") {
      setDeadline(Number(e.target.value))
    }
  }

  const addTask = (): void => {
    const newTask = {
      taskName: task,
      deadline: deadline
    }
    setTodos([...todo, newTask])
    console.log(todo, "todo")
    setTask("")
    setDeadline(0)
  }

  const completeTask = (taskName: string): void => {
    setTodos(todo?.filter((task) => {
      return task.taskName !== taskName
    }))
  }


  return (
    <div className='app'>
      <div className='header'>
        <div className="input-container">
          <input type={"text"} placeholder="Task..." value={task} name="task" onChange={handleChange} />
          <input type={"number"} name="deadline" value={deadline} placeholder="Deadline (in Days)..." onChange={handleChange} />
        </div>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='todolist'>
        {todo?.map((task: ITask, key: number) => {
          return <TodoTask key={key} task={task} completeTask={completeTask}/>
        })}
      </div>

    </div>
  )
}

export default App