
import { utilService } from '../../../services/util.service.js'
import { storageService } from '../../../services/async-storage.service.js'


const MAIL_KEY = 'mailDB'
_createMails()

export const mailService = {
  query,
  get,
  remove,
  save,
  // getEmptyBook,
  getDefaultFilter,
  getEmptyMailToSend,
  // addReview,
  // getNextBookId,
  // getPrevBookId
}



// function query() {
//     return storageService.query(MAIL_KEY) 
//   }


function get(mailId) {
  return storageService.get(MAIL_KEY, mailId)
}

function remove(mailId) {
  return storageService.remove(MAIL_KEY, mailId)
}

function save(mail) {
  if (mail.id) return storageService.put(MAIL_KEY, mail)
  else return storageService.post(MAIL_KEY, mail)
}


function query(filterBy) {
  return storageService.query(MAIL_KEY)
    .then(mails => {
      if (filterBy.txt) {
        const regex = new RegExp(filterBy.txt, 'i')
        mails = mails.filter(mail => (regex.test(mail.subject) || regex.test(mail.body) || regex.test(mail.from)))
      }
      if (filterBy.isRead !== '') {
        mails = mails.filter(mail => {
          return mail.isRead === filterBy.isRead
        })
      }
      if (filterBy.isStared) {
        mails = mails.filter(mail => {
          return mail.isStared
        })
      }
      if (filterBy.status) {
        mails = mails.filter(mail => {
          return mail.status === filterBy.status
        })
      }
      return mails
    })
}

function getDefaultFilter() {
  return { txt: '', isRead: '' }
}

function getEmptyMailToSend(){
  return {
    subject,
    from: 'shani',
    fromEmail: 'shanissss@gmail.com',
    body,
    isRead: false,
    sentAt: Date.now(),
    to,
    status: 'sent',
    isStared: false
  }
}


function _createMails() {
  let mails = utilService.loadFromStorage(MAIL_KEY);
  if (!mails || !mails.length) {
    mails = [
      {
        id: 'e101',
        subject: '🚀 Invitation to Join a Space Mission!',
        from: 'NASA',
        fromEmail: 'info@nasa.gov',
        body: 'Hello! We are looking for brave participants to join an extraordinary space mission. Ready for an adventure among the stars?',
        isRead: false,
        sentAt: Date.now(),
        to: 'you@dreamer.com',
        status: 'inbox',
        isStared: true
      },
      {
        id: 'e102',
        subject: '📢 End-of-Season Sale at DreamShop!',
        from: 'DreamShop',
        fromEmail: 'sales@dreamshop.com',
        body: 'All your dreams are now on sale! Don’t miss your chance to make them come true with a 50% discount!',
        isRead: true,
        sentAt: Date.now(),
        to: 'you@dreamer.com',
        status: 'inbox',
        isStared: false
      },
      {
        id: 'e103',
        subject: '💥 Breaking News: Prime Minister Resigns!',
        from: '24/7 News',
        fromEmail: 'news@247.com',
        body: 'The Prime Minister has announced an immediate resignation via email to close allies. Find out more inside!',
        isRead: false,
        sentAt: Date.now(),
        to: 'you@dreamer.com',
        status: 'sent',
        isStared: false
      },
      {
        id: 'e104',
        subject: '🍕 Pizza Special: Two for the Price of One!',
        from: 'PizzaWorld',
        fromEmail: 'promo@pizzaworld.com',
        body: 'Order today and get a second pizza for free! Offer valid until midnight.',
        isRead: true,
        sentAt: Date.now(),
        to: 'you@dreamer.com',
        status: 'inbox',
        isStared: true
      },
      {
        id: 'e105',
        subject: '📅 Meet Albert Einstein in Person!',
        from: 'Time Museum',
        fromEmail: 'info@timemuseum.com',
        body: 'An exclusive virtual meeting with Albert Einstein is waiting for you. Discover the secrets of time!',
        isRead: true,
        sentAt: Date.now(),
        to: 'you@dreamer.com',
        status: 'sent',
        isStared: true
      }
    ];
  }
  utilService.saveToStorage(MAIL_KEY, mails);
}
