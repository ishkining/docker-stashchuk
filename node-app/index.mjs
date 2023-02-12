import fs from 'fs'

fs.appendFile('my-file.txt', 'File was created Node.js', (err) => {
    if (err) throw err
    console.log('File was saved!')
    
})


setTimeout(() =>console.log('End'), 30000)