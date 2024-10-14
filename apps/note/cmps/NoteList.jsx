import { NotePreview } from './NotePreview.jsx'

<<<<<<< HEAD
export function NoteList({ notes }){
=======
export function NoteList({ notes }) {
>>>>>>> mail-app
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
