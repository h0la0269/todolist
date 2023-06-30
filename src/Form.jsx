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
		<form className="new-item-form" onSubmit={handlesubmit}>
       		<div className="form-row">
          			<label htmlFor="item">New Item</label>
          			<input 
					type="text" value={newItem} id="item" onInput={e=>setNewItem(e.target.value)}/>
        		</div>
        		<button type="submit" className="btn" >ADD</button>
      	</form>
	)
}