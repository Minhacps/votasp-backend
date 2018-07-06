const mongoose = require('mongoose');
const mockingoose = require('mockingoose').default;

const _answers = {
  userId: 'huehuehue',
  answers: [
    { questionId: 1, answer: 'concordo' },
    { questionId: 2, answer: 'discordo' },
    { questionId: 3, answer: 'concordo_plenamente' },
  ]
};

describe('Models/Answers/Candidate', () => {
  const Answers = require('./answers');

  it('should accept all fields', () => {
    const answers = new Answers.Candidate(_answers);

    expect( JSON.parse(JSON.stringify( answers )) ).toMatchObject(_answers);
  });

  it('should ignore extra fields', () => {
    const answers = new Answers.Candidate( { ..._answers, biru: 'laibe' });

    expect( JSON.parse(JSON.stringify( answers )) ).toMatchObject(_answers);
  });
});


describe('Models/Answers/Voter', () => {
  const Answers = require('./answers');

  it('should accept all fields', () => {
    const answers = new Answers.Voter(_answers);

    expect( JSON.parse(JSON.stringify( answers )) ).toMatchObject(_answers);
  });

  it('should ignore extra fields', () => {
    const answers = new Answers.Voter( { ..._answers, biru: 'laibe' });

    expect( JSON.parse(JSON.stringify( answers )) ).toMatchObject(_answers);
  });
})
