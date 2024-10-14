const { useState, useRef } = React

import {NoteIndex} from '../pages/NoteIndex'

export function NoteInput() {
  const [noteType, setNoteType] = useState('NoteTxt')
  const [isExpanded, setIsExpanded] = useState(false)

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [placeholder, setPlaceHolder] = useState('Enter your note...')


  const titleRef = useRef(null)
  const bodyRef = useRef(null)

  const handleBlur = () => {
    if (
      document.activeElement !== titleRef.current &&
      document.activeElement !== bodyRef.current
    ) {
      NoteIndex.onAddNote()
      setIsExpanded(false)
    }
  }

  const handleButtonClick = (type, placeholderText) => {
    setNoteType(type);
    setPlaceHolder(placeholderText);
  }


  const expandNote = () => {
    setIsExpanded(true)
  }

  return (
    <div className='note-input'>
      <div className='input'>
      {isExpanded && (
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={(ev) => setTitle(ev.target.value)}
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
    /> </div>
    <div className="buttons">
        <button onClick={() => {setNoteType('NoteTxt'); handleButtonClick('NoteTxt', 'Add a note...') }}>
          <i className='fa-solid fa-a'></i>
        </button>
        <button onClick={() => {setNoteType('NoteVideo'); handleButtonClick('NoteVideo', 'Add video URL') }}>
          <i className='fa-brands fa-youtube'></i>
        </button>
        <button onClick={() => {setNoteType('NoteImg'); handleButtonClick('NoteImg', 'Add image URL') }}>
          <i className='fa-regular fa-image'> </i>
        </button>
        <button onClick={() => {setNoteType('NoteTodos'); handleButtonClick('NoteTodos', 'Add a comma seperated list') }}>
          <i className='fa-solid fa-list'></i>
        </button>
      </div>
    </div>
  )
}
