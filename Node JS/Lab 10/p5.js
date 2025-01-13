const fs=require('fs');
var data = 'name:savan,rollno:121,city:morbi';

fs.writeFile('data.txt',data.toString(),(e)=>console.log('not error and data insert'));
