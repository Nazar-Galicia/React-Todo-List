import { memo, useContext } from "react"
import TodoItem from "@/entities/todo/ui/TodoItem"
import { TasksContext } from "@/entities/todo/model/TasksContext"

const TodoList = (props) => {
    const { styles } = props

    const {
        tasks,
        filteredTasks,
    } = useContext(TasksContext)

    const hasTasks = tasks.length > 0
    const hasEmptyFilteredTasks = filteredTasks?.length === 0

    if(!hasTasks) {
        return <div className={styles.emptyMessage}>There is no tasks yet</div>
    }

    if(hasTasks && hasEmptyFilteredTasks) {
        return <div className={styles.emptyMessage}>Tasks not found</div>
    }

    return (
        <ul className={styles.list}>         
            {
                (filteredTasks ?? tasks).map(({isDone, id, title}) => (
                    <TodoItem 
                        key={id} 
                        className={styles.item} 
                        isDone={isDone} 
                        id={id} 
                        title={title} 
                    />
                ))
            }
        </ul>
    )
}

export default memo(TodoList)