import { useState } from "react";

export default function TodoForm(props){
    const [newItem, setNewItem] = useState([]);

    function handleSubmit (e){
        e.preventDefault();
        if (newItem == "") return;

        props.onSubmit(newItem);
        setNewItem("");
      };

    return (
    <form onSubmit={handleSubmit} className='new-item-form'> {/*We cannot use class because it is a JavaScript keyword, so we use className*/}
      <div className='form-row'>
        <label htmlFor='item' className='lbl'>New Item</label>
        <input value = {newItem} onChange={e => setNewItem(e.target.value)} type='text' id='item'></input>
      </div>
      <button className='btn'>Add</button>
    </form>
    );
};