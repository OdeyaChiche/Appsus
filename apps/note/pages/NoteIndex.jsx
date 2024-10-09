const { useEffect, useState } = React

import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/NoteList.jsx'

export function NoteIndex() {
  const [notes, setNotes] = useState(noteService.query())
  console.log(notes)

  function onRemoveNote(noteId) {
    console.log('removed')
  }

  //   useEffect(() => {
  //     noteService.query().then(setNotes)
  //   },[])

  if (!notes) return <h1>Loading...</h1>

  //    return <div>note app</div>
  return (
    <section className='note-index'>
      <NoteList notes={notes} />
    </section>
  )
}
