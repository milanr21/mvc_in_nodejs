import express from 'express';

import bodyParser from 'body-parser';
import { insertEmployee } from '../controllers/employee.controller.js';

const employeeRoutes = express();

employeeRoutes.set('view engine', 'pug');
employeeRoutes.set('views', './views');

employeeRoutes.use(bodyParser.json());

employeeRoutes.use(bodyParser.urlencoded({ extended: true }));

employeeRoutes.get('/register', (req, res) => {
  res.render('Register your data');
});

employeeRoutes.get('/', (req, res) => {
  res.send('Register your data');
});

employeeRoutes.post('/register', insertEmployee);

export default employeeRoutes;
