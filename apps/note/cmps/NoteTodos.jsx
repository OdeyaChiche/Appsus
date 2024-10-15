const { useState, useEffect } = React

import { noteService } from '../services/note.service.js'

export function NoteTodosPreview({ info, noteId }) {

const [todos, setTodos]= useState(info.todos)

useEffect(() => {
  noteService.updateNote(todos, noteId);
}, [todos, noteId]);
  

const handleCheckboxChange = (idx) => {
  const updatedTodos = todos.map((todo, index) => {
      if (index === idx) {
        return { ...todo, doneAt: todo.doneAt ? null : Date.now() }; // עדכון doneAt
      }
      return todo;
    })
    setTodos(updatedTodos)
  }
  

  return (
    <article className='note todos-preview'>
    <h2>{info.title? info.title : ''}</h2>
      <ul>
        {info.todos.map((todo, index) => (
          <li key={index}>
            <div>
              <input type='checkbox' defaultChecked={todo.doneAt !== null} onChange={() => handleCheckboxChange(index, noteId)} id="todo" />
              <label htmlFor="todo">{todo.txt}</label>
           </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
