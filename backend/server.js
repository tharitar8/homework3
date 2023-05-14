const express = require('express')
const app = express()
const port = 3000
const apiRoutes = require('./routes/api')
const User = require('./models/User')

app.use('/api', apiRoutes)
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Sign Up Route
app.post('/api/signup', async (req, res) => {
  const { username, password } = req.body;
  // if username already exist
  const existUser = await User.findOne({ username })
  if (existUser) {
    return res.status(409).json({ message: 'Username already exists'})
  }
  // new username
  const newUser = new User({username, password})
  await newUser.save()

  res.status(200).json({ message: 'Sign up successful' });
});

// Sign In Route
app.post('/api/signin', (req, res) => {
  const { username, password } = req.body;
  res.status(200).json({ message: 'Sign in successful' });
});

app.use((err, req, res, next) => {
	console.error(err)
	res.status(500).json({ error: 'Server error' })
})

app.listen(port, () => {
	console.log(`Server listening on port ${port}`)
})