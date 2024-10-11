import {NoteTxtPreview} from './NoteTxt.jsx'
import {NoteImgPreview} from './NoteImg.jsx'
import {NoteVideoPreview} from './NoteVideo.jsx'
import {NoteTodosPreview} from './NoteTodos.jsx'

export function NotePreview({ note }) {

  switch (note.type) {
    case 'NoteTxt':
      return <NoteTxtPreview info={note.info} />
    case 'NoteImg':
      return <NoteImgPreview info={note.info} />
    case 'NoteVideo':
      return <NoteVideoPreview info={note.info} />
    case 'NoteTodos':
      return <NoteTodosPreview info={note.info} />
    default:
      return <div>Unknown Note Type</div>
  }
}
