//normal function
function sum(a, b) {
    return a + b;
}
var result = sum(100, 500);
console.log(result);
// inferring fun here we directly initilize fun to a var(no function name)
var result1 = function (a, b) {
    return a + b;
};
var val = result1(10, 20);
console.log(val);
//default and optional parameter
function prod(x, y) {
    if (x === void 0) { x = 100; }
    if (typeof y != 'undefined') {
        return x * y;
    }
    return x * x;
}
console.log(prod(20, 30));
console.log(prod(30));
console.log(prod()); // here we need to declare value so we need tominitilize is at beging
//rest paaarameters o to more argumnets
function getsumall() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var t = 0;
    num.forEach(function (n) { return t += n; }); //iterator
    return t;
}
console.log(getsumall(10, 40, 60, 70, 70));
console.log(getsumall(10, 40));
console.log(getsumall());
function getsumofall() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var tot = 0;
    numbers.forEach(function (num) { return tot += num; }); //Iterator
    return tot;
}
console.log(getsumofall(10, 40, 60, 70, 70));
console.log(getsumofall(10, 40));
console.log(getsumofall());
