const pt=require("path");
var pathjoin=pt.join('/abc','/ry','/ui');
console.log("join ::::",pathjoin);

pathnormolize=pt.normalize('///abc/ry/ui/..//dfg');
console.log("join ::::",pathnormolize);
basename=pt.basename('/abc/bcd/efg.txt')
console.log("join ::::",basename);
var name=pt.dirname('/abc/bcd/efg.txt')
console.log("join ::::",name);
pathextname=pt.extname('/abc/bcd/efg.txt')
console.log("join ::::",pathextname);