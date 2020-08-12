const express = require('express')
const app = express()

const http = require('http').createServer(app)
const io = require('socket.io')(http)
const path = require('path')


app.use(express.static(path.resolve(__dirname, '../public')))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/views/index.html'))
})

io.on('connection', (socket) => {
  console.log('a user connected')

  socket.on('search', (text) => {
    socket.emit('found', [
      {
        code: 0x15FF
      },
      {
        code: 0xF2500
      }
    ])
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
})

http.listen(3000, () => {
  console.log('listening on *:3000')
})
