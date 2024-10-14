const { useEffect, useState, useRef } = React

import { storageService } from '../../../services/async-storage.service.js'
import { noteService } from '../services/note.service.js'
import { utilService } from '../../../services/util.service.js'
import { NoteList } from '../cmps/NoteList.jsx'
import { NoteInput } from '../cmps/NoteInput.jsx'
import {NoteHeader} from '../cmps/NoteHeader.jsx'

export function NoteIndex() {
  const [notes, setNotes] = useState(noteService.query())

  function onRemoveNote(noteId) {
    console.log('removed')
  }

 function onAddNote() {
    noteService
      .addNote(title, body)
      .then(() => {
        return noteService.getNotes()
      })
      .then((updatedNotes) => {
        setNotes(updatedNotes) // Update the state with the new list of notes
        clearInputFields() // Clear the input fields
      })
      .catch((err) => console.error('Error adding note:', err))
  }

  const clearInputFields = () => {
    setTitle('')
    setBody('')
  }

 

  //   useEffect(() => {
  //     noteService.query().then(setNotes)
  //   },[])

  if (!notes) return <h1>Loading...</h1>

  return (
    <section className='note-index'>
    <NoteHeader/>
      <div className='add-note'>
        <NoteInput />
      </div>
      <NoteList notes={notes} />
    </section>
  )
}
