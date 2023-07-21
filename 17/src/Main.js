import { useReducer, useState,useEffect} from 'react';
function Main() {
  function UpdateTasks (tasks, action){
    switch (action.type) {
      case "ADD_TASK":
        return  [...tasks, action.value]
      case "REMOVE_TASK":
        return tasks.filter(task=> task !== action.value)  
      case "COMPLETE_TASK":
       return tasks.map(task=> task===action.value? {...task, completed: !task.completed}: task)
      default:
        break;
    }
    return tasks
  }
  const [tasks, setTasks] = useReducer(UpdateTasks,GetTasksFromStorage ());

  function GetTasksFromStorage (){
      return localStorage.getItem("tasks") != undefined? JSON.parse(localStorage.getItem("tasks")): []
  }

  const [newTask, setNewTask] = useState()

function AddTask(){ 
  if (newTask != '') {
    setTasks({type:"ADD_TASK", value: {task:newTask,completed:false  }})
    setNewTask("")
  }
}

useEffect(() => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

    return (
    <main className='container'>
        <table className='table'>
          <tbody>
           {
            tasks.map(task =>{
             return <tr>
               <td style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>{task.task}</td>
               <td><button className='btn btn-dark w-100' onClick={()=>{ setTasks({type: "COMPLETE_TASK", value: task}) }}>  {task.completed ? "Uncomplete" : "Complete"}</button></td>
               <td><button className='btn btn-danger w-100'  onClick={()=>{ setTasks({type: "REMOVE_TASK", value: task}) }}>x</button></td>
              </tr>
            })
           } 
          </tbody>
        </table>
        <input className='form-control' value={newTask} onChange={(event)=> setNewTask(event.target.value)} type="text" />
        <button className='btn btn-dark w-50' onClick={AddTask}>+</button>
    </main>
    );
  }
export default Main;