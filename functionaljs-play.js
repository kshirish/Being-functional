// Caution: 
// Stupidest library ever: don't waste time on this
// http://functionaljs.com/

var fjs = require('functional.js');

var add = function(a,b,c) { return a+b+c;};
var curriedAdd = fjs.curry(add);

var plusOneWithTwoParams = curriedAdd(1);
var plusTenWithOneParam = plusOneWithTwoParams(9);


console.log(plusTenWithOneParam(33));       //  43
console.log(plusOneWithTwoParams(100, 7));  //  108


var items = ["woman", "green", "bob"];

var eachDemo = fjs.each(function(item, index) {
    console.log(index +' -> '+ item);
});

eachDemo(items);

var mapDemo = fjs.map(function(item, index) {
    return item + '-mapped';
});

console.log(mapDemo(items));

var reduceDemo = fjs.reduce(function(currItem, nextItem) {
    return currItem + nextItem;
});

console.log(reduceDemo(items)); // womangreenbob

var odd = function (item) {
    return item % 2 !== 0;
};

var everyDemo = fjs.every(odd);

console.log(everyDemo([1, 3, 6, 9])); // => false


var anyDemo = fjs.any(odd);

console.log(anyDemo([2, 4, 8])); // false

var selectDemo = fjs.select(odd);   // same as filter

console.log(selectDemo([1, 12, 5, 8])); // [1, 5]

var data = [{
    "name": "John",
    "age": 16
},
{
    "name": "Jimmy",
    "age": 12
},
{
    "name": "Jade",
    "age": 81
}];

var pluckDemo = fjs.pluck("name");

pluckDemo(data);    // => ["John", "Jimmy", "Jade"]

var restDemo = fjs.rest(odd);

restDemo([5, 4, 3, 2, 1]); // => [3, 1]

var partitionDemo = fjs.partition(odd);

console.log(partitionDemo([7, 6, 5, 4, 3, 2, 1]));   //  [[7, 5, 3, 1], [6, 4, 2]]

var a = function (a) {
    return "hello " + a;
};

var b = function (a) {
    return a + 1;
};

var c = function (a) {
    return a * 100;
};

var composeDemo = fjs.compose(a, b, c);

composeDemo(2); // => "hello 201"

var propDemo = fjs.prop('msg');

propDemo({ msg: "hello world" });   // "hello world"
