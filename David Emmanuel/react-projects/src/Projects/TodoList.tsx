import { useState } from "react"

type Task = {
    task: string,
    completed: boolean,
}

export default function TodoList() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [newTask, setNewTask] = useState('')

    const updateTask = (i: number, task?: string, completed?: boolean) => {
        setTasks(tasks => {
            const editedTasks = [...tasks]
            if (task !== undefined) editedTasks[i].task = task
            if (completed !== undefined) editedTasks[i].completed = completed
            return editedTasks
        })
    }

    const deleteTask = (i: number) => {
        setTasks(tasks => tasks.filter((_, index) => index !== i))
    }

    return <div className='project' style={{ width: '100%', maxWidth: 500, margin: '2rem auto' }}>
        <form style={{ display: 'flex', gap: 5, marginBottom: '2rem' }} onSubmit={e => {
            e.preventDefault()
            const trimmed = newTask.trim()
            if (trimmed) setTasks(tasks => [...tasks, { task: trimmed, completed: false }])
            setNewTask('')
        }}>
            <input style={{ flex: 1 }} value={newTask} onChange={e => setNewTask(e.target.value)} />
            <button type='submit'>Add</button>
        </form>
        <FilteredTodoList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} filterType='PENDING' />
        <FilteredTodoList tasks={tasks} updateTask={updateTask} deleteTask={deleteTask} filterType='COMPLETED' />
    </div>
}

function FilteredTodoList({ tasks, updateTask, deleteTask, filterType }: {
    tasks: Task[],
    updateTask: (i: number, task?: string, completed?: boolean) => void,
    deleteTask: (i: number) => void,
    filterType: 'PENDING' | 'COMPLETED',
}) {
    const isFiltered = (task: Task) => filterType === 'COMPLETED' ? task.completed : !task.completed

    return tasks.find(isFiltered) && <>
        <h3 style={{ margin: 0 }}>{filterType}</h3>
        {tasks.map((task, i) => isFiltered(task) && <Todo
            key={i}
            task={task}
            setTask={newTask => updateTask(i, newTask)}
            setCompleted={completed => updateTask(i, undefined, completed)}
            deleteTask={() => deleteTask(i)}
        />)}
    </>
}

function Todo({ task, setTask, setCompleted, deleteTask }: {
    task: Task,
    setTask: (newTask: string) => void,
    setCompleted: (completed: boolean) => void,
    deleteTask: () => void,
}) {

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.currentTarget.blur();
        }
    }

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        const trimmed = e.target.value.trim()
        if (trimmed) setTask(trimmed)
        else deleteTask()
    }

    return <div style={{ display: 'flex', height: '3rem', gap: 5 }}>
        <input
            type='checkbox'
            checked={task.completed}
            onChange={e => setCompleted(e.target.checked)}
        />
        <input
            style={{ flex: 1, display: 'flex', alignItems: 'center', width: '100%', fontSize: '15px' }}
            className='task-input'
            value={task.task}
            onChange={e => setTask(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleBlur}
        />
        <button style={{ background: 'none' }} onClick={deleteTask}>
            <i className="material-icons">delete</i>
        </button>
    </div >
}