'use strict';

class Animal {
  constructor(health = 100, name) {
    this.health = health;
    this.name = name;
  }
}

class Herbivore extends Animal {
  constructor(health, name) {
    super(health, name)
    this.hidden = false;
  }

  hide() {
    this.hidden = true;
  }
}

class Carnivore extends Animal {
  constructor(health, name) {
    super(health, name)
  }

  bite(target) {

    if (target instanceof Herbivore
      && target.hidden === false) {
      herbivore.health -= 50;
    }
  }
}

module.exports = {
  Animal,
  Herbivore,
  Carnivore,
};
