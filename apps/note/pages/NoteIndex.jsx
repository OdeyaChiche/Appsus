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

  function onRemoveNote(noteId) {
    console.log('removed')
  }

  //   useEffect(() => {
  //     noteService.query().then(setNotes)
  //   },[])

  if (!notes) return <h1>Loading...</h1>

  return (
    <section className='note-index'>
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
      </div>
      <NoteList notes={notes} />
    </section>
  )
}
