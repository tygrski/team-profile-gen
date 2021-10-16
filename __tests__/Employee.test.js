
const Employee = require('../lib/Employee.js');

jest.mock('../lib/Employee.js');

test('created an employee object', () => {
  const employee = new Employee('James', '007', 'Employee', 'JBond@email.com');

  expect(employee.name).toBe('James');
  expect(empployee.id).toEqual('007');
  expect(employee.title).toBe('Employee');
  expect(employee.email).toBe('JBond@email.com')
});