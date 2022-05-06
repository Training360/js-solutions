function Walker(name = 'John Doe', state = 'dead') {
  this.name = name;
  this.state = state;
  Object.defineProperties(this, {
    firstName: {
      get() {
        return this.name.split(' ')[0];
      },
      set(value) {
        this.name = `${value} ${this.name.split(' ')[1]}`;
      },
    },
    lastName: {
      get() {
        return this.name.split(' ')[1];
      },
      set(value) {
        this.name = `${this.name.split(' ')[0]} ${value}`;
      },
    },
  });
}

Walker.prototype.speak = function speak(sound = 'grrrrrr') {
  return `${this.name} the ${this.state} says ${sound}!`;
};

Walker.prototype.walk = function walk(speedInMph = 10) {
  return `${this.name} the ${this.state} walks with ${speedInMph} mph!`;
};

Walker.prototype.eat = function eat(foodName = 'meat') {
  return `${this.name} the ${this.state} eats ${foodName}!`;
};

export default Walker;
