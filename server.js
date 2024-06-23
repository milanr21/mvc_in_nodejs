import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { insertEmployee } from './controllers/employee.controller.js';

mongoose.Promise = global.Promise;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const port = 3000;

mongoose.connect(
  'mongodb+srv://milan:npDOy8Ns8oSav5tB@cluster0.tz1c4hn.mongodb.net/registerInfo',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

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

// app.post('/register', (req, res) => {
//   res.send(req.body);
// });

app.post('/register', insertEmployee);

// app.get('/register', (req, res) => {
//   res.render('register');
// });

app.listen(port, () => {
  console.log(`The app ls listening to the port ${port}`);
});
