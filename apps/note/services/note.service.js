// note service
import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = { query, addNote, getNotes, updateNote }

function query() {
  let notes = utilService.loadFromStorage(NOTE_KEY)

  return notes
}

function getNotes() {
  return Promise.resolve(this.query())
  // let notes = utilService.loadFromStorage(NOTE_KEY)
  // return notes
}

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTE_KEY)

  if (!notes || !notes.length) {
    const notes = [
      {
        id: '101',
        createdAt: 1112222,
        type: 'NoteTxt',
        isPinned: true,
        style: {
          backgroundColor: '#00d',
        },
        info: {
          title: 'Are You Ready?',
          body: 'Fullstack Me Baby!',
        },
      },
      {
        id: '102',
        createdAt: 1112223,
        type: 'NoteImg',
        isPinned: false,
        info: {
          url: 'https://incognitoinventions.com/wp-content/uploads/2019/04/02-Types-of-Best-Girlfriends-Every-Adult-Woman-Should-Have_back-in-the-day_89510529_Todor-Tsvetkov-805x452.jpg',
          title: 'Sara and Me',
        },
        style: {
          backgroundColor: '#00d',
        },
      },
      {
        id: '103',
        createdAt: 1112224,
        type: 'NoteTodos',
        isPinned: false,
        info: {
          title: 'Tasks',
          todos: [
            { txt: 'driving license', doneAt: null },
            { txt: 'coding power', doneAt: 187111111 },
          ],
        },
      },
      {
        id: '104',
        createdAt: 1112226,
        type: 'NoteTxt',
        isPinned: true,
        style: {
          backgroundColor: '#00d',
        },
        info: {
          body: 'Fullstack Me Baby!',
        },
      },
      {
        id: '105',
        createdAt: 1112227,
        type: 'NoteImg',
        isPinned: false,
        info: {
          url: 'https://www.simplyrecipes.com/thmb/KE6iMblr3R2Db6oE8HdyVsFSj2A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-1024x682-583b275444104ef189d693a64df625da.jpg',
          title: 'Vibe',
        },
        style: {
          backgroundColor: '#00d',
        },
      },
      {
        id: '106',
        createdAt: 1112228,
        type: 'NoteTodos',
        isPinned: false,
        info: {
          title: 'Grocery',
          todos: [
            { txt: 'milk', doneAt: null },
            { txt: 'oil', doneAt: null },
            { txt: 'sugar', doneAt: null },
            { txt: 'coffee', doneAt: null },
            { txt: 'paper towl', doneAt: null },
            { txt: 'coke', doneAt: null },
            { txt: 'cereal', doneAt: null },
            { txt: 'rice', doneAt: null },
          ],
        },
      },
      {
        id: '107',
        createdAt: 1112229,
        type: 'NoteVideo',
        isPinned: false,
        info: {
          url: 'https://www.youtube.com/watch?v=PT2_F-1esPk',
        },
      },
    ]

    utilService.saveToStorage(NOTE_KEY, notes)
  }
}

function addNote(type, title, body) {
  let notes = utilService.loadFromStorage(NOTE_KEY)
  let note
  let todos
  let noteTodos
  if (type === 'NoteTodos') {
    todos = body.split(',').map((todo) => todo.trim())
    noteTodos = todos.map((todo) => ({ txt: todo, doneAt: null }))
  }

  switch (type) {
    case 'NoteTxt':
      note = {
        id: `${100 + notes.length + 1}`,
        createdAt: notes[notes.length - 1].createdAt++,
        type: 'NoteTxt',
        isPinned: false,
        style: {
          backgroundColor: utilService.getRandomColor(),
        },
        info: {
          title,
          body,
        },
      }
      break
    case 'NoteImg':
      note = {
        id: `${100 + notes.length + 1}`,
        createdAt: notes[notes.length - 1].createdAt++,
        type: 'NoteImg',
        isPinned: false,
        style: {
          backgroundColor: utilService.getRandomColor(),
        },
        info: {
          url: body,
          title,
        },
      }
      break
    case 'NoteVideo':
      note = {
        id: `${100 + notes.length + 1}`,
        createdAt: notes[notes.length - 1].createdAt++,
        type: 'NoteVideo',
        isPinned: false,
        style: {
          backgroundColor: utilService.getRandomColor(),
        },
        info: {
          url: body,
        },
      }
      break
    case 'NoteTodos':
      note = {
        id: `${100 + notes.length + 1}`,
        createdAt: notes[notes.length - 1].createdAt++,
        type: 'NoteTodos',
        isPinned: false,
        style: {
          backgroundColor: utilService.getRandomColor(),
        },
        info: {
          title,
          todos: [noteTodos],
        },
      }
      console.log(note)

      break
    default:
      return <div>Unknown Note Type</div>
  }
 
  return storageService.post(NOTE_KEY, note)
   
}

function updateNote(updatedTodos, noteId){
  let notes = utilService.loadFromStorage(NOTE_KEY) || []
  let noteIdx= notes.findIndex(note => note.id === noteId);
console.log(noteIdx);



  notes[noteIdx].info.todos= updatedTodos

  utilService.saveToStorage(NOTE_KEY, notes)
  console.log('updated');
  
}
