import { useState } from "react"


export default function Form() {

    const [newObject, setNewObject] = useState('');
    const [timeline, setTimeLine] = useState('');
    const [todos, setTodos] = useState([]);


    function handleSubmit(e) {
        e.preventDefault()

        setTodos(currentObject => {
            return [
                ...currentObject, 
                {id: crypto.randomUUID(),
                title: newObject,
                timeLine: timeline,
                 
            },
            ]
        }) 

        setNewObject('');
        setTimeLine('');

    }

    function deleteTask(id) {
        setTodos(currentTodos => {
            return currentTodos.filter(todo => todo.id !== id);
        })

    }

    function logPosition(id) {
        
        let positionY = id['y'];
        console.log(positionY);
    }


    return(
        <>
            <form onSubmit={handleSubmit} id="task-form">

            <label htmlFor="timeline">Timeline</label>
                <input
                    value={timeline}
                    type="text"
                    placeholder="type here"
                    onChange={e => setTimeLine(e.target.value)}
                    id="timeline"
                />

            <label htmlFor="item">Create Object</label>
                <input
                    value={newObject}
                    type="text"
                    placeholder="type here"
                    id="item"
                    onChange={e => setNewObject(e.target.value)}
                    />

            <input type="submit" value='submit'/>

                

            </form>

            {todos.map(todo => {
                return(
                    
                    <div key={todo.id} className="todo-container">
                        <div id="todo-textbox">
                            <h1>{todo.title}</h1>
                            <p>{todo.id}</p>
                            <p>{todo.timeLine}</p>
                            <button onClick={e => {
                                logPosition(e.target.getBoundingClientRect())
                                let positionX = (e.target.getBoundingClientRect()['x']);
                                console.log(positionX);
                                }}>
                                log position</button>
                            <button onClick={() => deleteTask(todo.id)}>delete</button>
                            
                        </div>
                    </div>

                    
                )
                
                
            })}
        </>
    )
}