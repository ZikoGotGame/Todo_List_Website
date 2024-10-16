export default function TodoItem({completed, id, title, toggleTodo, deleteTodos}){
    return (
        <li>
            <label>
              <input type='checkbox' checked={completed} onChange={e => toggleTodo(id, e.target.checked)}/>
              {title}
            </label>
          <button className='btn btn-danger' onClick={() => deleteTodos(id)}>Delete</button> {/** () => calls the function when clicked, without it it will just give the result of the function */}
        </li>
    );
};