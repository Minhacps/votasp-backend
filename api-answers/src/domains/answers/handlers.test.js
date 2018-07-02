const mockingoose = require('mockingoose').default;

const _SampleAnswers = {
  userId: 'biru|laibe12345',
  answers: [
    { questionId: 1, answer: 'discordo' },
    { questionId: 2, answer: 'concordo' },
    { questionId: 3, answer: 'concordo_plenamente' },
  ],
};

describe('Domains/Answers/Handlers', () => {
  describe('listUserAnswers', () => {
    const { listUserAnswers } = require('./handlers');

    it('should list candidate answers', async () => {
      mockingoose.CandidateAnswers.toReturn(_SampleAnswers, 'findOne');

      const context = {
        state: { user: {
          isCandidate: true,
          sub: 'biru|laibe12345',
        } },
        ok: jest.fn(),
        notFound: jest.fn(),
        internalServerError: jest.fn(),
      };

      await listUserAnswers(context);

      expect(context.ok.mock.calls.length).toBe(1);
      expect(context.notFound.mock.calls.length).toBe(0);
      expect(context.internalServerError.mock.calls.length).toBe(0);
      expect(context.ok.mock.calls[0][0].toObject()).toMatchObject(_SampleAnswers);
    });

    it('should list voter Answers', async () => {
      mockingoose.VoterAnswers.toReturn(_SampleAnswers, 'findOne');

      const context = {
        state: { user: {
          isCandidate: false,
          sub: 'biru|laibe12345',
        } },
        ok: jest.fn(),
        notFound: jest.fn(),
        internalServerError: jest.fn(),
      };

      await listUserAnswers(context);

      expect(context.ok.mock.calls.length).toBe(1);
      expect(context.notFound.mock.calls.length).toBe(0);
      expect(context.internalServerError.mock.calls.length).toBe(0);
      expect(context.ok.mock.calls[0][0].toObject()).toMatchObject(_SampleAnswers);
    });

  });
})
