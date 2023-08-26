import { useState } from "react"


export default function Form() {

    const [newObject, setNewObject] = useState('');
    const [timeline, setTimeLine] = useState('');
    const [todos, setTodos] = useState([]);
  


    function handleSubmit(e) {
        //prevent default cancles the refreshing of the page upon submission of the form. 
        e.preventDefault()
        //The currentObject below is just the empty [object] defined by the 'todos' state.
        // it is being set in this function
        setTodos(currentObject => {
            return [
                ...currentObject, 
                {id: crypto.randomUUID(),
                title: newObject,
                timeLine: timeline,
            },
            ]
        }) 
        //Below resets the values of the form input to empty strings.
        setNewObject('');
        setTimeLine('');

    }

    function deleteTask(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id);
        })

    }

    


    return(
        <>
            <form onSubmit={handleSubmit} id="task-form">

            <label htmlFor="item">Create Task</label>
            <input
                    value={newObject}
                    type="text"
                    placeholder="type here"
                    id="item"
                    onChange={e => setNewObject(e.target.value)}
                    />
            <label htmlFor="timeline">Timeline</label>
                <input
                    value={timeline}
                    type="text"
                    placeholder="type here"
                    onChange={e => setTimeLine(e.target.value)}
                    id="timeline"
                    />
            
            <input type="submit" value='submit'/> 
               
            </form>

            {todos.map(todo => {
                return(
                    
                    <div key={todo.id} className="todo-container">
                        <div id="todo-textbox">
                            <h1>{todo.title}</h1>
                            <p>ID: {todo.id}</p>
                            <p>Complete by: {todo.timeLine}</p>
                            <button onClick={() => deleteTask(todo.id)}>delete</button>
                            
                        </div>
                    </div>                    
                )
            })}
        </>
    )
}