// example.js
const parrotSay = require('./dist')

parrotSay('yaaay','random')
  .then(console.log)
  .catch(console.error)
