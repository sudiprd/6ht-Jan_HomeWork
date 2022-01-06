//typescript classes examples

// 1  ------------------------------
class Story{
    title: string;
    author: string;
    pages: number;

    constructor(t : string, a : string, p: number){
        this.title = t;
        this.author =a;
        this.pages = p;
    }

    display(){
        return `${this.title} is best story ever written by ${this.author} with ${this.pages} pages contain`;
    }

}

const story1= new Story('Do naina', 'Rajan khatri', 15);
const story2 = new Story('Nishabd', 'Gulam Ali', 21);

// console.log(story1, story2);
console.log(story1.display());
console.log(story2.display());


// --------------------------------------

class Invoice {
    public client : any
    public details : any
    public amount : number

    constructor(c : string, d : string, a : number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    debited() : string{
        return `Mr. ${this.client}, your ${this.amount} has been deducted for card renewal`
    }
}

let invoice = new Invoice ("Jhon Abrahim", "Amount has debited", 200000);
let invoice1 = new Invoice ("Hundi", "Amount has cerdited", 2000);

console.log(invoice.debited());

//--------------------------------------------------------

class Car {
    model: string[]
    price : number[]
    brand : string
    engine : string

    constructor(m: string[], p : number[], b:string, e?:string){
        this.model = m
        this.price = p
        this.brand = b
        this.engine = e

    }

    isWorking() : boolean{
        if( this.engine == 'Battery')
        return false
        else
        return;
    }

}

let tesla = new Car(['X', 'Y', 'N'], [145560, 45000, 30000], 'TESLA', 'Battery');
let honda = new Car(['zen', 'sx', 'euro'], [23000, 120000, 34000], 'HONDA', '4 Stroke Engine');

console.log(tesla.isWorking());

console.log(tesla);

console.log(honda);


//-----------------------------------------------------------------------

class Animal {
    private name : string
    
    constructor(n : string){
        this.name = n;
    }

    walk(distance : number){
        console.log()
    }
}

let animal = new Animal('subash');
animal.walk(10);





//=-------------------------------------------->



