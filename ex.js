var async = require('async');
console.log('command line args');
console.log('process.argv :',process.argv);

var fun1 = function function1(callback){
  console.log('This is function 1');
  callback();
}

var fun2 = function function2(callback){
  console.log('This is function 2');
  callback();
}

var fun3 = function function3(callback){
  console.log('This is function 3');
  callback();
}

console.log('async waterfall');
 async.waterfall([
        fun1,
        fun2,
        fun3
    ], function (error, success) {
        if (error) { console.log('Something is wrong!'); }
        return console.log('Done!');
    });