'use strict';

const Mdt2Json = require("mdtable2json");
const Axios = require('axios');


async function questionListFromGithub(request, h) {
    return await Axios.get('https://raw.githubusercontent.com/Minhacps/votasp/master/QUESTOES.md')
        .then(function (response) {
            return Mdt2Json.getTables(response.data)[0].json
                .map((question) => {
                    return {
                        'id': parseInt(question.id),
                        'question': question['Questão']
                    }
                })
        })
}

async function singleQuestionFromGithub(request, h) {
    let id = request.params.id
    return await questionListFromGithub(request, h)
        .then(function (questions) {
            return questions.find((q) => parseInt(id) === q.id)
                || h.response('question with id ' + id + ' not found').code(404)
        })

}

exports.questionList = questionListFromGithub;
exports.questionGet = singleQuestionFromGithub;