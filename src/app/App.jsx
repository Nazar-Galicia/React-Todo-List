import TaskPage from "@/pages/TaskPage"
import TasksPage from "@/pages/TasksPage"
import Router from "./routing/Router.jsx"
import './styles'

const App = () => {
  const routes = {
    '/': TasksPage,
    '/tasks/:id': TaskPage,
    '*': () => <div>404 page not found</div>
  }

  return (
    <Router routes={routes}/>
  )
}

export default App
