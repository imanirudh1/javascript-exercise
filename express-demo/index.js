const express = require('express')
const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World')
})

const users = [
  { id: 1, name: 'Express', email: 'express@gmail.com' },
  { id: 2, name: 'Express 2', email: 'express2@gmail.com' },
  { id: 3, name: 'Express 3', email: 'express3@gmail.com' },
]

app.get('/api/users', (req, res) => {
  res.send(users)
})

app.get('/api/users/:id', (req, res) => {
  res.send(req.params.id)
})

app.post('/api/users', (req, res) => {
  const user = {
    id: users.length + 1,
    name: req.body.name,
    email: req.body.email,
  }
  users.push(user)
  res.send(user)
})
app.delete('/api/users/:id', (req, res) => {
  const id = +req.params.id
  const user = users.find((el) => el.id === id)
  const index = users.indexOf(user)
  users.splice(users[index], 1)

  res.send(user)
})
app.put('/api/users/:id', (req, res) => {
  const id = +req.params.id
  const user = users.find((el) => el.id === id)
  user.name = req.body.name
  user.email = req.body.email
  res.send(user)
})

app.listen(3000, () => {
  console.log('Listening on port 3000...')
})
