import { NotePreview } from './NotePreview.jsx'

export function NoteList({ notes }){
  return (
    <ul className='note-list'>
      {notes.map((note) => (
      
        <li key={note.id}>
          <NotePreview note={note} />
      
        </li>
        
      ))}
    </ul>
  )
}


  //   <section>
        //     <button onClick={() => onRemoveCar(car.id)}>Remove</button>
        //   </section>
