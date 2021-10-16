
const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('created an employee element name', () => {
  const employee = new Employee('James');

  expect(newEmployee.name).toBe(name);

});

test('created an employee id element', () => {
  const employee = new Employee('007');

  expect(newEmployee.id).toBe(id);

});

test('created an employee object', () => {
  const employee = new Employee('Jbond@email.com');

  expect(newEmployee.email).toBe(email);

});

test('created an employee office number', () => {
  const employee = new Employee('88');

  expect(newEmployee.officeNumber).toBe(officeNumber);

});



// test('created an employee object', () => {
//   const employee = new Employee('James', '007', 'Employee', 'JBond@email.com');

//   expect(employee.name).toBe('James');
//   expect(empployee.id).toEqual('007');
//   expect(employee.title).toBe('Employee');
//   expect(employee.email).toBe('JBond@email.com')
// });