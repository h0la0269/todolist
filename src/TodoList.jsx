import { TodoItem } from "./TodoItem"

export default function ToDoList({todos, toggleTodo, deleteTodo}){
	return (
		<ul className="list pl-1 pt-2">
			{todos.length === 0 && "No Todos"}
			{todos.map(todo=>{
				return (
					<TodoItem 
					{...todo} 
					key={todo.id} 
					toggleTodo={toggleTodo} 
					deleteTodo={deleteTodo}
					/>
				)
			})}
		</ul>
	)
}