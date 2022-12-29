var events = require('events');
var eventsEmitter = new events.EventEmitter();

    //create an event handler
        var myEventHandler = function (){
            console.log('hello from eventHandler');
        }
    //assign the event handler to an  event
        eventsEmitter.on('scream', myEventHandler);
    //fire the scream event
        eventsEmitter.emit('scream');