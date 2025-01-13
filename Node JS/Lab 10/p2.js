const fs=require('fs');

var data="savan patel";
fs.writeFileSync('demo2.txt',data);
var data2='\n morbi';
fs.appendFileSync('demo2.txt',data2,(e)=>console.log(e))
fs.unlink('demo2.txt',(e)=> console.log('remove file'))
fs.readFile('demo2.txt','utf-8',(e,data1)=>{
    if(e){
        console.log(e)
    }
    console.log(data1)
})
