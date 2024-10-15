import {NoteTxtPreview} from './NoteTxt.jsx'
import {NoteImgPreview} from './NoteImg.jsx'
import {NoteVideoPreview} from './NoteVideo.jsx'
import {NoteTodosPreview} from './NoteTodos.jsx'

export function NotePreview({ note, noteId }) {

  switch (note.type) {
    case 'NoteTxt':
      return <NoteTxtPreview info={note.info} noteId={note.id} />
    case 'NoteImg':
      return <NoteImgPreview info={note.info} noteId={note.id}/>
    case 'NoteVideo':
      return <NoteVideoPreview info={note.info} noteId={note.id}/>
    case 'NoteTodos':
      return <NoteTodosPreview info={note.info} noteId={note.id}/>
    default:
      return <div>Unknown Note Type</div>
  }
}
