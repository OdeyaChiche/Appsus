// note service
import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const NOTE_KEY = 'noteDB'
_createNotes()

export const noteService = { query, addNote, getNotes }

function query() {
  
  let notes = utilService.loadFromStorage(NOTE_KEY)
  
  return notes
}

function getNotes(){
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
          title: 'Get my stuff together',
          todos: [
            { txt: 'Driving license', doneAt: null },
            { txt: 'Coding power', doneAt: 187111111 },
          ],
        },
      },
      {
        id: '104',
        createdAt: 1112225,
        type: 'NoteVideo',
        isPinned: false,
        info: {
          url: 'https://www.youtube.com/watch?v=PT2_F-1esPk',
        },
      },
  {
      id: '105',
      createdAt: 1112226,
      type: 'NoteTxt',
      isPinned: true,
      style: {
        backgroundColor: '#00d',
      },
      info: {
        body: 'Fullstack Me Baby!',
      }},
      {
        id: '106',
        createdAt: 1112227,
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
        id: '107',
        createdAt: 1112228,
        type: 'NoteTodos',
        isPinned: false,
        info: {
          title: 'Get my stuff together',
          todos: [
            { txt: 'Driving license', doneAt: null },
            { txt: 'Coding power', doneAt: 187111111 },
          ],
        },
      },
      {
        id: '108',
        createdAt: 1112229,
        type: 'NoteVideo',
        isPinned: false,
        info: {
          url: 'https://www.youtube.com/watch?v=PT2_F-1esPk',
        },
      },
    ]

    console.log(notes)

    utilService.saveToStorage(NOTE_KEY, notes)
  }
}


function addNote( title, body){
 let notes= utilService.loadFromStorage(NOTE_KEY)
  const note= {
    id: `${100+ notes.length+1}`,
    createdAt: notes[notes.length-1].createdAt++,
    type: 'NoteTxt',
    isPinned: false,
    style: {
      backgroundColor: utilService.getRandomColor(),
    },
    info: {
      title,
      body
    }}
    
 return storageService.post(NOTE_KEY, note)
}