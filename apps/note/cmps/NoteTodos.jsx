export function NoteTodosPreview({ info }) {
  return (
    <article className='note todos-preview'>
      <ul>
        {info.todos.map((todo, index) => (
          <li key={index}>
            <div>
              <input type='checkbox' checked={todo.doneAt} id="todo" />
              <label for="todo">{todo.txt}</label>
           </div>
          </li>
        ))}
      </ul>
    </article>
  )
}
