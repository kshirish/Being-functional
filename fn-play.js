(function() {

    'use strict';

    var fn = require('fn.js');

    var sum = function(a, b) {
        return a+b;
    };

    var greet = function(name) {
        return 'Hi, ' + name;
    };

    var getName = function(first, middle, last) {
        return first +' '+ middle +' '+ last;
    };

    var arrayLike = function() {
        return fn.toArray(arguments);
    };

    arrayLike(1,2,4,6);    // [1,2,4,6]

    fn.cloneArray(['hello', 'world', '!']); // ['hello', 'world', '!']

    fn.type(function () {}); // 'function'
    fn.type(null); // 'null'
    fn.type(undefined); // 'undefined'
    fn.type(/Hello World/i); // 'regexp'
    fn.type(new Date()); // 'date'

    fn.is('string', 'bill');    // true

    fn.apply(sum, [2, 5]);  // 7

    fn.concat([1, 2], [11, 3]);    // [1, 2, 11, 3]

    var incByOne = fn.partial(sum, 1);
    incByOne(53);   // 54

    var curried = fn.curry(getName);
    curried('ram')('gopal')('verma');   // ram gopal verma
    curried('ram', 'gopal')('verma');   // ram gopal verma

    fn.properties({name: 'ram gopal', age: 71});   // ['name', 'age']

    fn.each(function(val) {
        console.log(val);
    }, [1, 2, 5, 8, 99, 10]);

    fn.reduce(function(acc, val, index) {
        return acc + val;
    }, 0, [1,2,4]);     // 7

    fn.filter(function(val, index) {
        return val%2 === 0;
    }, [1,2,5,8]);  // [2, 8]

    fn.map(function(val, index) {
        return val += 1;
    }, [1,2,5,8]);  // [2, 3, 6, 9]

    fn.reverse( [ 0, 1, 2, 3, 4 ] );    // [ 4, 3, 2, 1, 0 ]

    var sayHi = fn.compose(console.log, greet, getName);
    sayHi('ram', 'gopal', 'verma');     // Hi, ram gopal verma

    sayHi = fn.pipeline(getName, greet, console.log);
    sayHi('ram', 'gopal', 'verma');     // Hi, ram gopal verma

    fn.prop('name', {name: 'ram gopal', age: 71});

    fn.merge({name: 'ram gopal'}, {age: 71});

    fn.delay(function() {
        console.log('After 1 second .. ');
    }, 1000);

    var delayed = fn.delayed(function() {
        console.log('After 1 second .. ');
    }, 1000);

    delayed();

    var someFun = function(a, b) {
        console.log('Inside someFun');
        return a + b + 4;
    };

    var cachedSum = fn.memoize(someFun);
    console.log(cachedSum(2, 7));   // execute someFun and cache the return value
    console.log(cachedSum(2, 7));   // return the cached value

    var asyncLog = fn.async(console.log);
    asyncLog('world!');
    console.log('hello');

    // disregards invocations that occur before the specified delay has passed
    setInterval(fn.throttle(function() {console.log('throttle');}, 3000), 500);

    // Any calls before the timer has passed will cause the timer to reset.
    setInterval(fn.debounce(function() {console.log('debounce');}, 3000), 500);

})();
