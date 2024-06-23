import { Employee } from '../models/employee.model.js';

export const insertEmployee = async (req, res) => {
  try {
    const employee = new Employee({
      name: req.body.name,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
      phoneNo: req.body.phoneNo,
    });

    const newEmployee = await employee.save();

    res.status(201).send('Employee Registered Sucessfully', newEmployee);
  } catch (error) {
    res.status(500).send(`Error: ${error.message}`);
  }
};
