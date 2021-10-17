
const Engineer = require('../lib/Engineer.js');

jest.mock('../lib/Engineer.js');

test('created an engineer office number', () => {
  const engineer = new Engineer
  const githubUserName = engineer.githubUserName;
  expect(engineer.githubUserName).toEqual(githubUserName)
  });
