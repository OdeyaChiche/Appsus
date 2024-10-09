
export function NoteVideoPreview({ info }) {
  return (
    <article className='note video-preview'>
      <video controls width='80%'>
        <source src={info.url} type='video/mp4' />
      </video>
    </article>
  )
}
