const express = require('express')
const path = require('path')
const exphbs = require('express-handlebars')
const session = require('express-session')

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(session({ secret: 'my secret value', resave: false, saveUninitialized: false}))


app.engine('.hbs', exphbs.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}))

app.set('view engine', '.hbs')

app.use('/', require('./routes/translate'))

app.listen(3000, () => {
    console.log(`Server is running on port: 3000`);
})