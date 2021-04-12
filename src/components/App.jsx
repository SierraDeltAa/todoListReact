import React, {useState} from "react";
import "../assets/css/style.css";
import Header from "./Header/Header"
import Tasks from "./Tasks/Tasks"
import Input from "./Input/Input"

export default function App(){

    const [task, setTask] = useState("");
    const [tasks, setTasks] = useState([]);
    
    const handleChange = (e)=>{
        const newValue = e.target.value;
        console.log(newValue);
        setTask(newValue);
    }


    const handleSubmit = (e)=>{
        const newTask = task;
        setTasks((previousTasks)=>{
            return [...previousTasks, newTask];
        })
    }

    const handleDelete = (id)=>{
        const idTask = id;
        setTasks((previousTasks)=>{
            return previousTasks.filter((task,idx)=>{
                return idx!= id;
            })
        })
    }

    const showTasks = tasks.map((singleTask, idx)=>{
            return (
                <div key={idx} id={idx} >
                    <div className="customTasks">
                        <div>
                            <strong>{idx} : </strong>
                            <small>{singleTask}</small>
                        </div>
                        <button className='btn btn-danger btn-sm customBtn'  onClick={()=>{handleDelete(idx)}} >&times;</button>
                    </div>
                </div>
            )
        })

    return(
        <div className="card bg-secondary text-light mb-3" style={{width:"20rem"}}>
            <Header />
            <Tasks onShow={showTasks} />
            <Input onChange={handleChange} onSubmit={handleSubmit}  />
        </div>
    )
}