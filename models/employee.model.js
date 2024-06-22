const { default: mongoose } = require('mongoose');

const employeeSchema = mongoose.Schema(
  {},
  {
    timestamps: true,
  }
);

export const Employee = new mongoose.model('Employee', employeeSchema);
