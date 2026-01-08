class Dog {
    constructor(name) {
        this.name = name;
    }

    introduce() {
        console.log(`Woof! My name is ${this.name}.`);
    }

    static bark() {
        console.log("Woof! Woof!");
    }
}

const myDog = new Dog("Buddy");
myDog.introduce();

Dog.bark();