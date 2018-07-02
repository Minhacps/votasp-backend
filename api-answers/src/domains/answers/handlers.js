const Answers = require('../../models/answers');

const _genericInternalErrorGenerator = (context) =>
  (error) => {
    console.error(error);
    context.internalServerError('Something went wrong');
  };

const _listAnswersGenerator = (type = 'Voter') =>
  (context) =>
    Answers[type].findOne({ userId: context.state.user.sub })
      .then( (response) =>
        response ?
          context.ok(response) :
          context.notFound()
      )
      .catch( _genericInternalErrorGenerator(context) );

const listUserAnswers = (context) =>
  context.state.user['isCandidate'] ?
    _listAnswersGenerator('Candidate')(context) :
    _listAnswersGenerator('Voter')(context);

module.exports = {
  listUserAnswers,
};
