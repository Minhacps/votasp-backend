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

describe('Domain/Answers/Model', () => {
  const Answers = require('./model');

  it('should accept all fields', () => {
    const answers = new Answers(_answers);

    expect( JSON.parse(JSON.stringify( answers )) ).toMatchObject(_answers);
  });

  it('should ignore extra fields', () => {
    const answers = new Answers( { ..._answers, biru: 'laibe' });

    expect( JSON.parse(JSON.stringify( answers )) ).toMatchObject(_answers);
  });

})
