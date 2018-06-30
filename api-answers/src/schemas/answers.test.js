describe('Models/Answers', () => {
  const Answers = require('./answers');

  it('should only accept answers with unique questionId', async () => {
    const answersValid = {
      userId: 'huehuehue',
      answers: [
        { questionId: 1, answer: 'concordo_plenamente'},
        { questionId: 2, answer: 'concordo'},
        { questionId: 3, answer: 'discordo'},
        { questionId: 4, answer: 'discordo_plenamente'},
      ]
    };

    const answerInvalid = {
      userId: 'huehuehue',
      answers: [
        { questionId: 1, answer: 'concordo_plenamente'},
        { questionId: 1, answer: 'concordo'},
      ]
    }

    const { error: errorResultOnValidAnswer } = Answers.validate(answersValid);
    const { error: errorResultOnInvalidAnswer } = Answers.validate(answerInvalid);

    expect(errorResultOnValidAnswer).toBe(null);
    expect(errorResultOnInvalidAnswer).not.toBe(null);
  });

  it('should only accept answers with userId', async () => {
    const answersValid = {
      userId: 'huehuehue',
      answers: [
        { questionId: 1, answer: 'concordo_plenamente'},
      ]
    };

    const answerInvalid = {
      answers: [
        { questionId: 1, answer: 'concordo_plenamente'},
      ]
    }

    const { error: errorResultOnValidAnswer } = Answers.validate(answersValid);
    const { error: errorResultOnInvalidAnswer } = Answers.validate(answerInvalid);

    expect(errorResultOnValidAnswer).toBe(null);
    expect(errorResultOnInvalidAnswer).not.toBe(null);
  });
})
