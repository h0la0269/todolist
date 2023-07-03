export function TodoItem({completed, id, title, toggleTodo, deleteTodo}){
	return (
		<li className="indiv-list bg-[#F6F1F1] mx-2 my-4 flex justify-between self-center p-1">
			<label>
				<input 
					type="checkbox" 
					defaultChecked={completed} 
					onChange={e=>toggleTodo(id,e.target.checked)}
				/>
				{title}
			</label>
			<button 
				className="btn btn-danger max-h-6" 
				onClick={()=>deleteTodo(id)}
			>
			DELETE
			</button>
		</li>
	)
}