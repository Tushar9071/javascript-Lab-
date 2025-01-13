const EventEmitter = require('events')
const { emit } = require('process')
const event = new EventEmitter()
event.on("DU",()=>{
        console.log("This is Du Event")
})
event.emit("DU")