//typescript classes examples
// 1  ------------------------------
var Story = /** @class */ (function () {
    function Story(t, a, p) {
        this.title = t;
        this.author = a;
        this.pages = p;
    }
    Story.prototype.display = function () {
        return "".concat(this.title, " is best story ever written by ").concat(this.author, " with ").concat(this.pages, " pages contain");
    };
    return Story;
}());
var story1 = new Story('Do naina', 'Rajan khatri', 15);
var story2 = new Story('Nishabd', 'Gulam Ali', 21);
// console.log(story1, story2);
console.log(story1.display());
console.log(story2.display());
// --------------------------------------
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.debited = function () {
        return "Mr. ".concat(this.client, ", your ").concat(this.amount, " has been deducted for card renewal");
    };
    return Invoice;
}());
var invoice = new Invoice("Jhon Abrahim", "Amount has debited", 200000);
var invoice1 = new Invoice("Hundi", "Amount has cerdited", 2000);
console.log(invoice.debited());
//--------------------------------------------------------
var Car = /** @class */ (function () {
    function Car(m, p, b, e) {
        this.model = m;
        this.price = p;
        this.brand = b;
        this.engine = e;
    }
    Car.prototype.isWorking = function () {
        if (this.engine == 'Battery')
            return false;
        else
            return;
    };
    return Car;
}());
var tesla = new Car(['X', 'Y', 'N'], [145560, 45000, 30000], 'TESLA', 'Battery');
var honda = new Car(['zen', 'sx', 'euro'], [23000, 120000, 34000], 'HONDA', '4 Stroke Engine');
console.log(tesla.isWorking());
console.log(tesla);
console.log(honda);
//-----------------------------------------------------------------------
var Animal = /** @class */ (function () {
    function Animal(n) {
        this.name = n;
    }
    Animal.prototype.walk = function (distance) {
        console.log();
    };
    return Animal;
}());
var animal = new Animal('subash');
animal.walk(10);
//=-------------------------------------------->
