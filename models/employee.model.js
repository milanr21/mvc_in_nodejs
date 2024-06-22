import mongoose from 'mongoose';

const employeeSchema = mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

export const Employee = new mongoose.model('Employee', employeeSchema);
