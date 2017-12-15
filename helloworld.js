'use strict';

var pre = "Hello ";

function sayHello( name){
  console.log(pre + name);
}

function getPreString(){
  console.log(pre);
}

module.exports = {
  sayHello,
  getPreString
}
