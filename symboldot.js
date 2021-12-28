function display() {
    var a = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        a[_i] = arguments[_i];
    }
    var i = 0;
    var sum = 0;
    for (i = 0; i <= a.length; i++) {
        sum = sum + a[i];
    }
    return sum;
}
var result = 0;
result = display(1, 2, 3, 4);
console.log(result);
result = display(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(result);
