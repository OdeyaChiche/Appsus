<<<<<<< HEAD
const { useEffect, useState, useRef } = React

import { storageService } from '../../../services/async-storage.service.js'
import { noteService } from '../services/note.service.js'
import { utilService } from '../../../services/util.service.js'
import { NoteList } from '../cmps/NoteList.jsx'
import { NoteInput } from '../cmps/NoteInput.jsx'
import {NoteHeader} from '../cmps/NoteHeader.jsx'

export function NoteIndex() {
  const [notes, setNotes] = useState(noteService.query())
=======
const { useEffect, useState } = React

import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/NoteList.jsx'

export function NoteIndex() {
  const [notes, setNotes] = useState(noteService.query())
  console.log(notes)

  const [isExpanded, setIsExpanded] = useState(false)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const expandNote = () => {
    setIsExpanded(true)
  }
>>>>>>> mail-app

  function onRemoveNote(noteId) {
    console.log('removed')
  }

<<<<<<< HEAD
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

 

=======
>>>>>>> mail-app
  //   useEffect(() => {
  //     noteService.query().then(setNotes)
  //   },[])

  if (!notes) return <h1>Loading...</h1>

  return (
    <section className='note-index'>
<<<<<<< HEAD
    <NoteHeader/>
      <div className='add-note'>
        <NoteInput />
=======
      <div className='add-note'>
        {isExpanded && (
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            className='add-note-title'
          />
        )}

        <input
          type='text'
          placeholder='Add note...'
          value={body}
          onFocus={expandNote}
          onChange={(ev) => setBody(ev.target.value)}
          className='add-note-body'
        />
>>>>>>> mail-app
      </div>
      <NoteList notes={notes} />
    </section>
  )
}
