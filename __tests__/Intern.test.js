
const Intern = require('../lib/Intern.js');

jest.mock('../lib/Intern.js');

test('created an intern school name', () => {
  const intern = new Intern
  const school = intern.school;
  expect(intern.school).toEqual(school)
  });
