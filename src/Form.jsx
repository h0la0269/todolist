import { useState } from "react";

export default function newForm({onsub}){

	const [newItem, setNewItem] = useState("");

	function handlesubmit (e) {
		e.preventDefault();
		if(newItem){
			onsub(newItem);
			setNewItem("")
		}
	}

	return (
		<form className="new-item-form pt-5 pb-7" 
		onSubmit={handlesubmit}
		>
		  		<label htmlFor="item " className="main-heading block text-center ">ToDoList</label>
				<div className="input-container rounded-md bg-[#A0BFE0] p-3 mt-6  mx-6 justify-center max-w-sm flex">
					<input 
					type="text" 
					value={newItem} 
					id="item" 
					onInput={e=>setNewItem(e.target.value)}
					className="max-w-lg mr-3"
					placeholder="Enter todos"
					/>
						<button type="submit" className="btn ml-12 px-1 bg-[#4A55A2] text-gray-50" >ADD</button>
				</div>
		  			
	  	</form>
	)
}