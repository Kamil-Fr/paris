//WERSJA DRUGA

/*import { useState, useEffect } from 'react';
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://gulykyzkuaexgtpytfqx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd1bHlreXprdWFleGd0cHl0ZnF4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI4NzcyNzEsImV4cCI6MjAwODQ1MzI3MX0.LWIVEbPwAHbs5iPH1-3m1D-dtupgwYyiy5tMkUNlzWI';

export const supabase = createClient(supabaseUrl, supabaseKey);
import 'bootstrap/dist/css/bootstrap.min.css';
import "/src/scss/_planner.scss"


function PlannerTrip() {
    const [days, setDays] = useState(0);
    const [toDoLists, setToDoLists] = useState([]);
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');



    useEffect(() => {
        fetchTasksFromDatabase();
    }, []);
    const fetchTasksFromDatabase = async () => {
        const { data, error } = await supabase.from('Places').select('*');
        if (data) {
            setTasks(data);
        } else {
            console.error('Błąd podczas pobierania zadań z bazy danych:', error);
        }
    };
    const handleGenerate = () => {
        const newToDoLists = [];
        for (let i = 1; i <= days; i++) {
            newToDoLists.push(
                <div key={i} className="row">
                    <h2 className="col">Day {i}</h2>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        className="form-control form-control-lg"
                        placeholder="Add"
                    />
                    <button className="col-auto btn btn-lg btn-success" onClick={() => handleAddTask(i)} className="btn btn-lg btn-success">Add</button>
                    <ul>
                        {tasks.map((task) => (
                            <li key={task.id}>
                                {task.name}

                            </li>
                        ))}
                    </ul>
                </div>
            );
        }

        setToDoLists(newToDoLists);
    };

    const handleAddTask = async (day) => {
        // Dodawanie nowego zadania do bazy danych Supabase
        const { data, error } = await supabase
            .from('Places')
            .insert([
                {
                    name: newTask,

                },
            ]);

        if (data) {
                       fetchTasksFromDatabase();
        } else {
            console.error('Błąd podczas dodawania zadania do bazy danych:', error);
        }
        setNewTask('');
    };

    const handleEditTask = async (task) => {

        const { data, error } = await supabase
            .from('Places')
            .update({ other_column: 'otherValue' })
            .eq('some_column', 'someValue')
            .select()

        console.log(`Edit: ${task.title}`);
    };

    const handleDeleteTask = async (task) => {

        const { error } = await supabase
            .from('Places')
            .delete()
            .eq('some_column', 'someValue')

        console.log(`Delete: ${task.title}`);
    };

    const handleShowDetails = async (task) => {



        console.log(`Details - Address: ${task.address}, District: ${task.district}`);
    }


    return (
        <div className="container PlannerTrip">
            <h2>Your trip's plan</h2>
            <label>
                Number of days:
                <input
                    type="number"
                    value={days}
                    onChange={(e) => setDays(e.target.value)}
                />
            </label>
            <button onClick={handleGenerate}>Generate</button>
            {toDoLists.map((list, index) => (
                <div key={index}>{list}</div>
            ))}
        </div>
    );
}

export default PlannerTrip;*/

//WERSJA PIERWSZA
import {useState} from 'react';
import AddPoint from './AddPoint.jsx';
import UpdatePoint from './UpdatePoint.jsx';
import ToVisit from './ToVisit.jsx';


import 'bootstrap/dist/css/bootstrap.min.css';

import '/src/scss/_planner.scss';

function PlannerTrip({numerListy}) {
    const [toDo, setToDo] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [updateData, setUpdateData] = useState('');
    const addTask = () => {
        if(newTask) {
            let num = toDo.length + 1;
            let newEntry = { id: num, title: newTask, status: false }
            setToDo([...toDo, newEntry])
            setNewTask('');
        }
    }

    const deleteTask = (id) => {
        let newTasks = toDo.filter( task => task.id !== id)
        setToDo(newTasks);
    }


    const markDone = (id) => {
        let newTask = toDo.map( task => {
            if( task.id === id ) {
                return ({ ...task, status: !task.status })
            }
            return task;
        })
        setToDo(newTask);
    }


    const cancelUpdate = () => {
        setUpdateData('');
    }


    const changeTask = (e) => {
        let newEntry = {
            id: updateData.id,
            title: e.target.value,
            status: updateData.status ? true : false
        }
        setUpdateData(newEntry);
    }


    const updateTask = () => {
        let filterRecords = [...toDo].filter( task => task.id !== updateData.id );
        let updatedObject = [...filterRecords, updateData]
        setToDo(updatedObject);
        setUpdateData('');
    }

    return (
        <div className="container Planner">

            <br /><br />
            <h2>Let's plan! Day {numerListy}</h2>
            <br /><br />

            {updateData && updateData ? (
                <UpdatePoint
                    updateData={updateData}
                    changeTask={changeTask}
                    updateTask={updateTask}
                    cancelUpdate={cancelUpdate}
                />
            ) : (
                <AddPoint
                    newTask={newTask}
                    setNewTask={setNewTask}
                    addTask={addTask}
                />
            )}


            {toDo && toDo.length ? '' : 'No Places to visit...'}

            <ToVisit
                toDo={toDo}
                markDone={markDone}
                setUpdateData={setUpdateData}
                deleteTask={deleteTask}
            />

        </div>
    );
}

export default PlannerTrip;









