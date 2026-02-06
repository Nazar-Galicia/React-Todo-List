import { useEffect, useState } from "react"
import tasksAPI from "@/shared/api/tasks/tasksAPI.js"

const TaskPage = (props) => {
    const { params } = props
    const taskId = params.id

    const [task, setTask] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [hasError, setHasError] = useState(false)

    useEffect(() => {
        tasksAPI.getById(taskId)
            .then((taskData) => {
                setTask(taskData)
                setHasError(false)
            })
            .catch(() => {
                setHasError(true)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }, [taskId])

    if(isLoading) {
        return <div>Loading...</div>
    }

    if(hasError) {
        return <div>Task not found!</div>
    }

    return (
        <div>
            <h1>{task.title}</h1>
            <p>{task.isDone ? 'Task completed' : 'Task is not completed'}</p>
        </div>
    )
}

export default TaskPage