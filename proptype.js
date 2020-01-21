function Vehicle (name, model, color, engineType) {
    this.name = name;
    this.model = model;
    this.color = color;
    this.engineType = engineType;
    this.engineStatus = 'off';
}

Vehicle.prototype.startEngine = function() {
    this.engineStatus = 'on';
    console.log(`Engine of a ${this.name} is ${this.engineStatus}`);
}
Vehicle.prototype.offEngine = function() {
    this.engineStatus = 'off';
    console.log(`Engine off a ${this.name} is ${this.engineStatus}`);
}

const car1 = new Vehicle('Mercedes', 'G', 'black', 'V8');
console.log(car1);
car1.startEngine();
console.log(car1.engineStatus);
car1.offEngine();
console.log(car1.engineStatus);

const car2 = new Vehicle('Saab', 'X-turbo', 'red', 'V6');
console.log(car2);
car2.startEngine();
console.log(car2.engineStatus);
car2.offEngine();
console.log(car2.engineStatus);


