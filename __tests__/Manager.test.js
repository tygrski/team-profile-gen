
const Manager = require('../lib/Manager.js');

jest.mock('../lib/Manager.js');

test('created an manager office number', () => {
  const manager = new Manager 
  const officeNumber = manager.officeNumber
  expect(manager.officeNumber).toEqual(officeNumber)
  });

 
