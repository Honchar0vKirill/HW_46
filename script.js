class User {
    constructor(name, age, salary){
        this.name = name;
        this.age = age;
        this.salary = salary;
    }
    cart = [];
    addItem(name, price){
        this.cart.push(
            name,
            price
        )
    }
}

class Product {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

let TV = new Product("TV", 1000);
let phone = new Product("Phone", 500);
let tablet = new Product("Tablet", 700); 

let user1 = new User("Ben", 23, 14000);
let user2 = new User("Nick", 20, 15000);

user2.addItem(tablet);
user1.addItem(phone);

console.log(user1, user2);