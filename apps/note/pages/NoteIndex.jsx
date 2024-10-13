const { useEffect, useState } = React

import { storageService } from '../../../services/async-storage.service.js'
import { noteService } from '../services/note.service.js'
import { utilService } from '../../../services/util.service.js'
import { NoteList } from '../cmps/NoteList.jsx'

export function NoteIndex() {
  const [notes, setNotes] = useState(noteService.query())

  const [isExpanded, setIsExpanded] = useState(false)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
 

  const expandNote = () => {
    setIsExpanded(true)
  }

  function onRemoveNote(noteId) {
    console.log('removed')
  }

  function onAddNote() {
    noteService.addNote(title, body)
    .then(() => {
      return noteService.getNotes()})
      .then(updatedNotes => {
        setNotes(updatedNotes); // Update the state with the new list of notes
        clearInputFields(); // Clear the input fields
      })
      .catch(err => console.error('Error adding note:', err));
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
      <div className='add-note' onBlur={onAddNote}>
        {isExpanded && (
          <input
            type='text'
            placeholder='Title'
            value={title}
            onChange={(ev) => setTitle(ev.target.value)}
            // onBlur={onAddNote}
            className='add-note-title'
          />
        )}

        <input
          type='text'
          placeholder='Add note...'
          value={body}
          onFocus={expandNote}
          onChange={(ev) => setBody(ev.target.value)}
          // onBlur={onAddNote}
          className='add-note-body'
        />
      </div>
      <NoteList notes={notes} />
    </section>
      )
      }
