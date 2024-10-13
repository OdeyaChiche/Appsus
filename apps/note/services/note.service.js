// note service
import { storageService } from '../../../services/async-storage.service.js'
import { utilService } from '../../../services/util.service.js'

const NOTE_KEY = 'noteDB'
_createNotes

export const noteService = { query }

function query() {
  let notes = utilService.loadFromStorage(NOTE_KEY)
  return notes
}

// function query() {
//   const notes = [
//     {
//       id: 'n101',
//       createdAt: 1112222,
//       type: 'NoteTxt',
//       isPinned: true,
//       style: {
//         backgroundColor: '#00d',
//       },
//       info: {
//         txt: 'Fullstack Me Baby!',
//       },
//     },
//     {
//       id: 'n102',
//       createdAt: 1112223,
//       type: 'NoteImg',
//       isPinned: false,
//       info: {
//         url: 'https://incognitoinventions.com/wp-content/uploads/2019/04/02-Types-of-Best-Girlfriends-Every-Adult-Woman-Should-Have_back-in-the-day_89510529_Todor-Tsvetkov-805x452.jpg',
//         title: 'Sara and Me',
//       },
//       style: {
//         backgroundColor: '#00d',
//       },
//     },
//     {
//       id: 'n103',
//       createdAt: 1112224,
//       type: 'NoteTodos',
//       isPinned: false,
//       info: {
//         title: 'Get my stuff together',
//         todos: [
//           { txt: 'Driving license', doneAt: null },
//           { txt: 'Coding power', doneAt: 187111111 },
//         ],
//       },
//     },
//     {
//         id: 'n104',
//         createdAt: 1112225,
//         type: 'NoteVideo',
//         isPinned: false,
//         info: {
//             url: 'https://www.youtube.com/watch?v=PT2_F-1esPk'
//         },
//       },
//       {
//         id: 'n105',
//         createdAt: 1112222,
//         type: 'NoteTxt',
//         isPinned: true,
//         style: {
//           backgroundColor: '#00d',
//         },
//         info: {
//           txt: 'Fullstack Me Baby!',
//         },
//       },
//       {
//         id: 'n106',
//         createdAt: 1112223,
//         type: 'NoteImg',
//         isPinned: false,
//         info: {
//           url: 'https://incognitoinventions.com/wp-content/uploads/2019/04/02-Types-of-Best-Girlfriends-Every-Adult-Woman-Should-Have_back-in-the-day_89510529_Todor-Tsvetkov-805x452.jpg',
//           title: 'Sara and Me',
//         },
//         style: {
//           backgroundColor: '#00d',
//         },
//       },
//       {
//         id: 'n107',
//         createdAt: 1112224,
//         type: 'NoteTodos',
//         isPinned: false,
//         info: {
//           title: 'Get my stuff together',
//           todos: [
//             { txt: 'Driving license', doneAt: null },
//             { txt: 'Coding power', doneAt: 187111111 },
//           ],
//         },
//       },
//       {
//           id: 'n108',
//           createdAt: 1112225,
//           type: 'NoteVideo',
//           isPinned: false,
//           info: {
//               url: 'https://www.youtube.com/watch?v=PT2_F-1esPk'
//           },
//         },
//   ]
//   utilService.saveToStorage(NOTE_KEY, notes)
//   return notes
// }

function _createNotes() {
  let notes = utilService.loadFromStorage(NOTE_KEY)
  console.log(notes)

  if (!notes || !notes.length) {
    console.log('work again')

    const notes = [
      {
        id: 'n101',
        createdAt: 1112222,
        type: 'NoteTxt',
        isPinned: true,
        style: {
          backgroundColor: '#00d',
        },
        info: {
          txt: 'Fullstack Me Baby!',
        },
      },
      {
        id: 'n102',
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
        id: 'n103',
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
        id: 'n104',
        createdAt: 1112225,
        type: 'NoteVideo',
        isPinned: false,
        info: {
          url: 'https://www.youtube.com/watch?v=PT2_F-1esPk',
        },
      },
      {
        id: 'n105',
        createdAt: 1112222,
        type: 'NoteTxt',
        isPinned: true,
        style: {
          backgroundColor: '#00d',
        },
        info: {
          txt: 'Fullstack Me Baby!',
        },
      },
      {
        id: 'n106',
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
        id: 'n107',
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
        id: 'n108',
        createdAt: 1112225,
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
