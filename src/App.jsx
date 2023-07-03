import { useEffect } from "react";
import { useState } from "react";
import Form from "./Form";
import ToDoList from "./TodoList";
import "./styles.css";
export default function App (){

	
	const [todos, setTodos] = useState(()=>{
		const localValue=localStorage.getItem("ITEMS___")
		if(localValue==null) return []
		return JSON.parse(localValue)
	});

	useEffect(()=>{
		localStorage.setItem("ITEMS___",JSON.stringify(todos))
	},[todos])

	function addTodo(title){
		setTodos((currentTodo)=>{
			return [...currentTodo,
				{
					id: crypto.randomUUID(),
					title,
					completed: false
				}
			]
		})
	}


	function toggleTodo(id,checkbox){
		setTodos(currentTodo=>{
			return currentTodo.map(todo=>{
				if(todo.id===id){
					return {...todo, checkbox}
				}
				return todo
			})
		})
	}

	function deleteTodo(id){
		setTodos(currentTodo=>{
			return currentTodo.filter(todo=> todo.id !== id)
		})
	}

	return(
    	<div className="main-container bg-[#C5DFF8] m-auto max-w-lg justify-center h-96 max-h-full w-96 rounded-md px-4">
			<Form onsub={addTodo} />
			<h1 className="header font-bold">My Todo's</h1>
			<ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
		</div>
  	)
}