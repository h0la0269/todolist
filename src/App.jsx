import { useEffect } from "react";
import { useState } from "react";
import Form from "./Form";
import "./styles.css"
import ToDoList from "./TodoList";
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
    <>
      	<Form onsub={addTodo} />
      	<h1 className="header">ToDoList</h1>
      	<ToDoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  	)
}