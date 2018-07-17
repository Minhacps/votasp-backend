const functions = require('firebase-functions');
const fs = require('fs');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    const filePath = '/tmp/test.txt';

    const getNewDate = () => {
        const now = Math.floor(Date.now() / 1000);
        const file = fs.openSync(filePath, 'w')
        fs.writeSync(file, now);
        return now;
    }

    if (! fs.existsSync(filePath)) {
        response.send(getNewDate());
        return;
    }

    const cachedDate = parseInt(fs.readFileSync(filePath), 10);
    console.log('cached: '+cachedDate);
    const now = Math.floor(Date.now() / 1000);
    console.log('now: '+now);
    console.log('diff:'+ (now - cachedDate))


    
    if (now - cachedDate > 60) {
        response.send(new Date(getNewDate()*1000));
        return;
    }

    response.send(new Date(cachedDate*1000));
});
