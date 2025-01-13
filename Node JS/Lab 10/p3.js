const cp=require('child_process');
var chile=cp.exec('dir',(e,stdout,stdin)=>{
    console.log(e);
    console.log(stdout);
    console.log(stdin);
})