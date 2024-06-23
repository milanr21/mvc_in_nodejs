import express from 'express';

const app = express();
const port = 3000;

// app.set('view engine', 'ejs');

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/login', (req, res) => {
  res.render('login');
});

app.get('/register', (req, res) => {
  res.render('register');
});

// app.get('/register', (req, res) => {
//   res.render('register');
// });

app.listen(port, () => {
  console.log(`The app ls listening to the port ${port}`);
});
