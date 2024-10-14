const { useEffect, useState, useRef } = React

import { noteService } from '../services/note.service.js'
import { NoteList } from '../cmps/NoteList.jsx'
import { NoteHeader } from '../cmps/NoteHeader.jsx'

export function NoteIndex() {
  const [notes, setNotes] = useState(noteService.query())
  const [noteType, setNoteType] = useState('NoteTxt')
  const [isExpanded, setIsExpanded] = useState(false)

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [placeholder, setPlaceHolder] = useState('Enter your note...')

  const titleRef = useRef(null)
  const bodyRef = useRef(null)

  function onRemoveNote(noteId) {
    console.log('removed')
  }

  function onAddNote(noteType) {
    noteService
      .addNote(noteType,title, body)
      .then(() => {
        return noteService.getNotes()
      })
      .then((updatedNotes) => {
        setNotes(updatedNotes)
        clearInputFields()
      })
      .catch((err) => console.error('Error adding note:', err))
  }

  const clearInputFields = () => {
    setTitle('')
    setBody('')
  }

  const handleBlur = () => {
    if (
      document.activeElement !== titleRef.current &&
      document.activeElement !== bodyRef.current
    ) {
      onAddNote(noteType)
      // setIsExpanded(false)
    }
  }

  const handleButtonClick = (type, placeholderText) => {
    setNoteType(type)
    setPlaceHolder(placeholderText)
  }

  const expandNote = () => {
    setIsExpanded(true)
  }

  if (!notes) return <h1>Loading...</h1>

  return (
    <section >
      <NoteHeader />
      <div className='note-index'>
      <div className='add-note'>
        <div className='note-input'>
          <div className='input'>
            {isExpanded && (
              <input
                type='text'
                placeholder='Title'
                value={title}
                onChange={(ev) => setTitle(ev.target.value)}
                onBlur={handleBlur}
                ref={titleRef}
                className='add-note-title'
              />
            )}
            <input
              type={noteType}
              placeholder={placeholder}
              value={body}
              onFocus={expandNote}
              onChange={(ev) => setBody(ev.target.value)}
              onBlur={handleBlur}
              ref={bodyRef}
              className='add-note-body'
            />{' '}
          </div>
          <div className='buttons'>
            <button
              onClick={() => {
                setNoteType('NoteTxt')
                handleButtonClick('NoteTxt', 'Add a note...')
              }}
            >
              <i className='fa-solid fa-a'></i>
            </button>
            <button
              onClick={() => {
                setNoteType('NoteVideo')
                handleButtonClick('NoteVideo', 'Add video URL')
              }}
            >
              <i className='fa-brands fa-youtube'></i>
            </button>
            <button
              onClick={() => {
                setNoteType('NoteImg')
                handleButtonClick('NoteImg', 'Add image URL')
              }}
            >
              <i className='fa-regular fa-image'> </i>
            </button>
            <button
              onClick={() => {
                setNoteType('NoteTodos')
                handleButtonClick('NoteTodos', 'Add a comma seperated list')
              }}
            >
              <i className='fa-solid fa-list'></i>
            </button>
          </div>
        </div>
      
      </div>
      <NoteList notes={notes} />
      </div>
    </section>
  )
}
