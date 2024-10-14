export function NoteTxtPreview({ info }) {
  return (
    <article className='note txt-preview'>
      <div>
       <h2>{info.title? info.title : ''}</h2>
        <h4>{info.body}</h4>
      </div>
    </article>
  )
}
