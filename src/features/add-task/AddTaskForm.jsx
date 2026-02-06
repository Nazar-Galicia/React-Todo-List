import { useContext, useState } from "react"
import Button from "@/shared/ui/Button"
import Field from "@/shared/ui/Field"
import { TasksContext } from "@/entities/todo"

const AddTaskForm = (props) => {
    const {
        styles,
    } = props

    const [newTaskTitle, setNewTaskTitle] = useState('');

    const {
        addTask,
        newTaskInputRef,
    } = useContext(TasksContext)

    const clearNewTaskTitle = newTaskTitle.trim()
    const isNewTaskTitleEmpty = clearNewTaskTitle.length === 0

    const [error, setError] = useState('')

    function onSubmit(event) {
        event.preventDefault()

        if(!isNewTaskTitleEmpty) {
           addTask(
               clearNewTaskTitle,
               () => setNewTaskTitle('')
           )
        }
    }

    function onInput(event) {
        const { value } = event.target
        const clearValue = value.trim()
        const hasOnlySpaces = value.length > 0 && clearValue.length === 0

        setNewTaskTitle(event.target.value)
        setError(hasOnlySpaces ? 'The task can not be empty' : '')
    } 

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <Field
                className={styles.field}
                label="New task title"
                id="new-task"
                error={error}
                value={newTaskTitle}
                onInput={onInput}
                ref={newTaskInputRef}
            />
            <Button 
                type="submit"
                isDisabled={isNewTaskTitleEmpty}
            >
                Add
            </Button>
        </form>
    )
}

export default AddTaskForm