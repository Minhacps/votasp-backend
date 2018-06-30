const Mongoose = require('mongoose');
const Joigoose = require('../../infrastructure/joigoose');
const Answers = require('../../schemas/answer');

const schema = new Mongoose.Schema( Joigoose.convert(Answers) );

module.exports = Mongoose.model('Answers', schema);
