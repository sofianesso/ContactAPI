const functions = require('firebase-functions');

exports.myFunction = functions.https.onRequest((req, res) => {

    const message = "Hello from Epstein Island. We welcome you warm to our resorts 05/04-2023!";

    res.send(message);
});