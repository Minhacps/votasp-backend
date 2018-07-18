const functions = require('firebase-functions');
const fs = require('fs');

exports.helloWorld = functions.https.onRequest((req, resp) => {

    const questions_number = 40;
    const cacheTtlInMs = 60000;

    const generate = (idPrefix, num, alternatives) => {
      return Array(num).fill(1).map( (v, i) => {
        return {
          id: idPrefix+'-'+i,
          answers: Array(questions_number).fill(1).map( (vv, j) => {
            return {
              questionId: j,
                answer: alternatives[Math.floor(Math.random() * alternatives.length)]
            }
          })
        }
      });
    };

    const cacheFilePath = '/tmp/candidateAnswers';

    const fetchCandidateData = () => {
      return generate('candidate', 4000, [2, 1, -1, -2]);
    };

    const saveToCache = (candidateData) => {
      const fileDescriptor = fs.openSync(cacheFilePath, 'w');
      fs.writeSync(fileDescriptor, JSON.stringify(candidateData));
    };

    const readCache = () => {
      return JSON.parse(fs.readFileSync(cacheFilePath));
    };

    const updateCandidateData = () => {
      const newData = fetchCandidateData();
      saveToCache(newData);
    };

    if (! fs.existsSync(cacheFilePath)) {
      updateCandidateData();
    }

    const cacheCreationDatetime = new Date(fs.statSync(cacheFilePath).mtime);
    const currentDatetime = new Date();
    const cacheAgeInMs = currentDatetime - cacheCreationDatetime;
    if ( cacheAgeInMs > cacheTtlInMs) {
      updateCandidateData();
    }

    const cacheStats = fs.statSync(cacheFilePath);
    const cachedData = [readCache()];
    resp.send({
      lastCacheUpdate: cacheStats.mtime,
      cacheSize: cacheStats.size,
      cacheAge: cacheAgeInMs
    });
});
