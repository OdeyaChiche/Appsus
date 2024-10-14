<<<<<<< HEAD


=======
>>>>>>> mail-app
export function NoteTodosPreview({ info }) {
  return (
    <article className='note todos-preview'>
    <h2>{info.title? info.title : ''}</h2>
      <ul>
        {info.todos.map((todo, index) => (
          <li key={index}>
            <div>
<<<<<<< HEAD
              <input type='checkbox' defaultChecked={todo.doneAt}  id="todo" />
              <label htmlFor="todo">{todo.txt}</label>
=======
              <input type='checkbox' checked={todo.doneAt} id="todo" />
              <label for="todo">{todo.txt}</label>
>>>>>>> mail-app
           </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
