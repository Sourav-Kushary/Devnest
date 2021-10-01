// const fs = require('fs');
// // fs.mkdirSync('Day-5');
// // fs.writeFileSync('Day-5/index.txt','Good Morning');
// // fs.appendFileSync('Day-5/index.txt',' Kushary');
// // const data = fs.readFileSync('Day-5/index.txt','utf-8');
// // console.log(data);
// fs.renameSync('Day-5/index.txt','Day-5/hello.txt');
// fs.unlinkSync('Day-5/hello.txt');
// fs.rmdirSync('Day-5');

const test = require('./require_test.js');
var obj1 = new test.Test();
var obj2 = new test.Test2();
console.log(obj1.print());


console.log(obj2.print());