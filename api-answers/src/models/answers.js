const { defaultsDeep } = require('lodash');
const Mongoose = require('mongoose');
const Joigoose = require('../infrastructure/joigoose');
const Answers = require('../schemas/answers');

const schema = new Mongoose.Schema( Joigoose.convert(Answers) );

schema.statics.updateOrAdd = function (answers) {
  return this.find({ userId: answers.userId })
    .then( (data) =>
      data.length ?
        ( new this( defaultsDeep(data[0], answers) ).save() ) :
        ( new this(answers).save() )
    )
    .catch(console.error);
};

module.exports = {
  Candidate: Mongoose.model('CandidateAnswers', schema),
  Voter:Mongoose.model('VoterAnswers', schema),
};
