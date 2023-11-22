module.exports.go = (server) => {
    const Primus = require('primus');
    const primus = new Primus(server, {

    });

    // check if primus connection ok, then console.log
    primus.on('connection', function (spark) { // connection = je logt aan
        console.log('primus here 😁😁😁');

        // check if data received from client, then console.log
        spark.on('data', function (data) { // ondata is iemand stuurt bvb iets
            console.log('primus data received from client: ', data);
            if(data.action === "newMessage"){
                primus.write({
                    action: "newMessage",
                    message: data.message, // wat binnenkomt wil je terugsturen ook
                });
            }
        });
    });

    
};