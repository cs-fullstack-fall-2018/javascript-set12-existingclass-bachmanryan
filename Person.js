class Person {
    constructor(name, age, weight, height) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
    }

    bodyMassIndex(){
        var heightDividedByHundred = this.height / 100.0;
        return this.weight / ( heightDividedByHundred * heightDividedByHundred );
    }

    becomeOlder() {
        this.age = this.age + 1;
    }

    printPerson() {
        alert(this.name + ", age " + this.age + " years");
    }

}

function main() {
    var firstPerson = new Person("Dave", 25, 150, 6);
    var secondPerson = new Person("Fred", 30, 200, 5.5);

    alert(firstPerson.name + "'s BMI is "+ firstPerson.bodyMassIndex());
    alert(secondPerson.name + "'s BMI is "+ secondPerson.bodyMassIndex());
    firstPerson.bodyMassIndex();
    secondPerson.bodyMassIndex();
    addObjectsToArray(firstPerson, secondPerson);
}
function addObjectsToArray(firstPerson, secondPerson) {
    var newArray = [];
    newArray.push(firstPerson);
    newArray.push(secondPerson);
    newArray[1].printPerson();
}


main();