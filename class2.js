var B = /** @class */ (function () {
    function B() {
        this.name = "ranga";
        this.location = "knl";
    }
    B.prototype.display = function () {
        console.log(this.name);
        console.log(this.location);
    };
    return B;
}());
var b1 = new B();
b1.display();
