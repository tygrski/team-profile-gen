
const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('created an employee element name', () => {
  const employee = new Employee;
  const name = employee.name
  expect(employee.name).toBe(name);

});

test('created an employee id element', () => {
  const employee = new Employee('007');
  const id = employee.id
  expect(employee.id).toBe(id);

});

test('created an employee object', () => {
  const employee = new Employee('Jbond@email.com');
  const email = employee.email
  expect(employee.email).toBe(email);

});

test('created an employee office number', () => {
  const employee = new Employee('88');
  const officeNumber = employee.officeNumber
  expect(employee.officeNumber).toBe(officeNumber);

});



