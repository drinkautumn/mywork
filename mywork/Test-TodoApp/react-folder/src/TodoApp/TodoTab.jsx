import React, { useState, useEffect } from 'react';
import Header from '../TodoApp/Header';
import "../App.css";

function TodoTab() {
    const [tasks, setTasks] = useState([]);
    const [activeTab, setActiveTab] = useState('all');
    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleAddTask = (taskContent) => {
        const newTask = {
            id: Date.now(),
            content: taskContent,
            completed: false,
        };
        setTasks([...tasks, newTask]);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const handleToggleTask = (taskId) => {
        const updatedTasks = tasks.map((task) => {
            if (task.id === taskId) {
                return {
                    ...task,
                    completed: !task.completed,
                };
            }
            return task;
        });
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const handleDeleteTask = (taskId) => {
        const updatedTasks = tasks.filter((task) => task.id !== taskId);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    const handleDeleteAllTasks = () => {
        setTasks([]);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    return (
        <div className='flex flex-col h-full justify-center items-center'>
            <div className="items-center w-[28%]">
                <Header />
                <div className="flex justify-around border-b-2">
                    <button
                        className={` ${activeTab === 'all' ? 'border-b-2 border-blue-500' : ''} font-bold`}
                        onClick={() => handleTabClick('all')}
                    >
                        All
                    </button>

                    <button
                        className={` ${activeTab === 'active' ? 'border-b-2 border-blue-500' : ''} font-bold`}
                        onClick={() => handleTabClick('active')}
                    >
                        Active
                    </button>
                    <button
                        className={` ${activeTab === 'completed' ? 'border-b-2 border-blue-500' : ''} font-bold`}
                        onClick={() => handleTabClick('completed')}
                    >
                        Completed
                    </button>
                </div>
                <div>
                    {activeTab === 'all' && (
                        <div>
                            <div>
                                <form className='mt-5 flex justify-between'
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const taskContent = e.target.task.value;
                                        if (taskContent.trim() !== '') {
                                            handleAddTask(taskContent);
                                            e.target.task.value = '';
                                        }
                                    }}
                                >
                                    <input
                                        type="text"
                                        name="task"
                                        className="border-2 w-80 h-10 rounded-xl pl-3"
                                        placeholder="add details"
                                    />
                                    <button type="submit" className="border rounded-xl bg-sky-500 w-20 h-10 hover:bg-sky-300 text-white">
                                        Add
                                    </button>
                                </form>
                            </div>
                            <ul>
                                {tasks.map((task) => (
                                    <li
                                        className='mt-5'
                                        key={task.id}>
                                        <input
                                            className="mr-2"
                                            type="checkbox"
                                            checked={task.completed}
                                            onChange={() => handleToggleTask(task.id)}
                                        />
                                        <span
                                            style={{
                                                textDecoration: task.completed ? 'line-through' : 'none',
                                            }}
                                        >
                                            {task.content}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    )}

                    {activeTab === 'active' && (
                        <div>
                            <div>
                                <form
                                    className='mt-5 flex justify-between'
                                    onSubmit={(e) => {
                                        e.preventDefault();
                                        const taskContent = e.target.task.value;
                                        if (taskContent.trim() !== '') {
                                            handleAddTask(taskContent);
                                            e.target.task.value = '';
                                        }
                                    }}
                                >
                                    <input
                                        type="text"
                                        name="task"
                                        placeholder="add details"
                                        className="border-2 w-80 h-10 rounded-xl pl-3"
                                    />
                                    <button type="submit" className="border rounded-xl bg-sky-500 w-20 h-10 hover:bg-sky-300 text-white">
                                        Add
                                    </button>
                                </form>
                            </div>
                            <ul>
                                {tasks
                                    .filter((task) => !task.completed)
                                    .map((task) => (
                                        <li
                                            className='mt-5'
                                            key={task.id}>
                                            <input
                                                className="mr-2"
                                                type="checkbox"
                                                checked={task.completed}
                                                onChange={() => handleToggleTask(task.id)}
                                            />
                                            <span>{task.content}</span>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    )}
                    {activeTab === 'completed' && (
                        <div className="">
                            {tasks
                                .filter((task) => task.completed)
                                .map((task) => (
                                    <div key={task.id} className="flex justify-between mt-5">
                                        <div>
                                            <input
                                                className="mr-2"
                                                type="checkbox"
                                                checked={task.completed}
                                                onChange={() => handleToggleTask(task.id)}
                                            />
                                            <span className="task-content completed">
                                                {task.content}
                                            </span>
                                        </div>
                                        <button
                                            className="delete-button"
                                            onClick={() => handleDeleteTask(task.id)}
                                        >
                                            <i className="fa-solid fa-trash"></i>
                                        </button>
                                    </div>
                                ))}
                            <div className='flex flex-row-reverse'>
                                <button className="border rounded-xl bg-red-500 w-32 h-10 hover:bg-red-400 text-white" onClick={handleDeleteAllTasks}>
                                    <i className="fa-solid fa-trash"></i>  Delete All
                                </button>
                            </div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
}

export default TodoTab;