
const Manager = require('../lib/Manager.js');

jest.mock('../lib/Manager.js');

test('created an manager object', () => {
  const manager = new Manager

  expect(manager.name).toBe(expect.any(String));
  expect(manager.id).toEqual(expect.any(Number));
  expect(manager.title).toBe(expect.any(String));
  expect(manager.email).toBe(expect.any(String))
  expect(manager.officeNumber).toEqual(expect.any(Number))
});