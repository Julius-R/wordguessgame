!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}var t={};n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(n){return e[n]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},n.p="/public/js/",n(n.s=0)}([function(){const e=document.getElementById("wrong_num"),n=document.getElementById("right_num"),t=document.getElementById("option1"),r=document.getElementById("option2"),o=document.querySelectorAll("#options button"),u=document.getElementById("reset"),i=document.getElementById("result"),d={turn:1,words:["chimney","hen","story","steak","pick","ton","clerk","old age","slow","traffic","lion","grant","source","bullet","lip","revise","master","retired"],numRight:0,numWrong:0},l=function(){this.innerText===randomAnswer.innerText?(d.numRight++,n.innerText=d.numRight,d.turn++,a()):(d.numWrong++,e.innerText=d.numWrong,d.turn++,a())},c=()=>{var e=Math.floor;t.innerText=d.words[e(18*Math.random()+0)],r.innerText=d.words[e(18*Math.random()+0)],t===r?c():(randomAnswer=o[e(2*Math.random()+0)],o.forEach(e=>{e.addEventListener("click",l)}))},a=function(){10<d.turn?(t.disabled=!0,r.disabled=!0,i.innerText=d.numRight>d.numWrong?"You won!":"Maybe next time. :("):c()},m=function(){t.disabled=!1,r.disabled=!1,i.innerText=" ",d.turn=1,d.numRight=0,d.numWrong=0,e.innerText=d.numWrong,n.innerText=d.numRight,c()};m(),u.addEventListener("click",m)}]);