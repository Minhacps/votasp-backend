const Mdt2Json = require("mdtable2json");
const Axios = require('axios');


const questionMapper = ({ id, 'Questão': question }) => ({
  'id': parseInt(id),
  'question': question
});

const questionExtractor = (data) =>
  Mdt2Json.getTables(data)[0].json;

const questions =
  Axios.get('https://raw.githubusercontent.com/Minhacps/votasp/master/QUESTOES.md')
    .then((response) =>
      questionExtractor(response.data)
        .map(questionMapper)
    );


const questionListFromGithub = (context) =>
    questions
      .then( context.ok );

const singleQuestionFromGithub = (context) => {
    const id = parseInt(context.request.params.id);
    return questions
        .then( (questions) => questions.find( (question) => id === question.id ) )
        .then( (question) =>
          question ?
            context.ok(question) :
            context.notFound(`question with id ${id} not found`)
        );
};

module.exports = {
  questionList: questionListFromGithub,
  questionGet: singleQuestionFromGithub,
};
