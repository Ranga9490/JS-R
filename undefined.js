function display(a, b) {
    if (b != undefined)
        return a = b;
    else
        return a;
}
var result = 0;
result = display(10);
console.log(result);
result = display(10, 20);
console.log(result);
