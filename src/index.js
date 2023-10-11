import {join as joinPath} from 'path'
import {readFile,readdir,statSync} from 'fs'

import boxen from 'boxen'

const borderStyle = 'classic'

function say(string, parrot) {
  return new Promise((resolve, reject) => {
    parrot = new Promise((resolve, reject) => {
      if (parrot===undefined) {
        resolve('default-parrot.txt');
      } else if (parrot==='random') {
        readdir(__dirname, (err, files) => {
          const fileNames = files.filter(file => statSync(joinPath(__dirname, file)).isFile());
          const parrots = fileNames.filter(file => file.endsWith('.txt'));
          resolve(parrots[Math.floor(Math.random()*parrots.length)]);
        });
      } else {
        parrot = parrot + '.txt';
        resolve(parrot);
      }
    });
    parrot.then((parrot) => {
      readFile(joinPath(__dirname, parrot), 'utf-8', (err, data) => {
        if (err) {
          reject(err)
        }
        resolve(boxen(string, {borderStyle}) + data)
      })
    });
  })
}

export default say
