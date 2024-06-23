import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: [8, 'Password must be at least 8 characters'],
  },

  phoneNo: {
    type: String,
    required: true,
    unique: true,
    min: [10, 'Phone Number must be at least 10 characters'],
  },
});

export const Employee = new mongoose.model('Employee', employeeSchema);
