const em = require('events');
class Myemitter extends em{}
const ticker = new Myemitter()
ticker.on('Video uploaded',(student)=>{
        console.log('Video uploaded',student.name)

},)
ticker.emit('Video uploaded',{name:'vraj'})
i = 0;

setInterval(()=>{
        
        console.log('Tick'+i)
        i++;
},1000);
