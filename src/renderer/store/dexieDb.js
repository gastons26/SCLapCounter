import Dexie from 'dexie'

const db = new Dexie('SlotCarRacing')

db.version(1).stores({
  settings: `++id,code`
}).upgrade(tx => {
  db.settings.add({code: 'MySimpleCode'})
})

db.version(2).upgrade(tx => {
  db.settings.add({code: 'MySimpleCode'})
})

export default db
