var product = /** @class */ (function () {
    function product(id, proname, proprice, quantity) {
        this.id = id;
        this.proname = proname;
        this.proprice = proprice;
        this.quantity = quantity;
    }
    product.prototype.display = function () {
        return "".concat(this.id, " ").concat(this.proname, " ").concat(this.proprice, " ").concat(this.quantity);
    };
    return product;
}());
//calling class
var prodcl = new product(123, 'lap', 1234, 12); //sending values using constructor
console.log(prodcl.display()); //calling method using instance
