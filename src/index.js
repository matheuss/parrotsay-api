import {join as joinPath} from 'path'
import {readFile} from 'fs'

import boxen from 'boxen'

const borderStyle = 'classic'

function say(string) {
  return new Promise((resolve, reject) => {
    readFile(joinPath(__dirname, 'default-parrot.txt'), 'utf-8', (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(boxen(string, {borderStyle}) + data)
    })
  })
}

export default say
