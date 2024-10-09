export function NoteTodosPreview({ info }) {
  return (
    <article className='note todos-preview'>
      <ul>
        {info.todos.map((todo, index) => (
          <li key={index}>
            <input type='checkbox' checked={todo.doneAt} />
            {todo.txt}
          </li>
        ))}
      </ul>
    </article>
  )
}
