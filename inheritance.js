var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var x = /** @class */ (function () {
    function x() {
        this.display = console.log("this is class x method");
    }
    return x;
}());
var y = /** @class */ (function (_super) {
    __extends(y, _super);
    function y() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.display1 = console.log("hcvghcdbhc");
        return _this;
    }
    return y;
}(x));
var c2 = new x();
c2.display;
var c3 = new y();
c3.display1;
