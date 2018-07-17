const Mongoose = require('mongoose');
const Joigoose = require('../infrastructure/joigoose');
const Answers = require('../schemas/answers');

const schema = new Mongoose.Schema( Joigoose.convert(Answers) );

schema.statics.updateOrAdd = function (answers) {
  return this.find({ userId: answers.userId })
    .then( (data) => data ?
      ( new this(answers).save() ) :
      ( new this(data).save(answers) )
    )
    .catch(console.error);
};

module.exports = {
  Candidate: Mongoose.model('CandidateAnswers', schema),
  Voter:Mongoose.model('VoterAnswers', schema),
};
