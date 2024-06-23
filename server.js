import express from 'express';

const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', (req, res) => {
  res.send('Hello World');
});

var tagline = 'No more programming concept is complete without this man';

app.get('/register', (req, res) => {
  tagline: tagline;
  res.render('register');
});

app.listen(port, () => {
  console.log(`The app ls listening to the port ${port}`);
});
