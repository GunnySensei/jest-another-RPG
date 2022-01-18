const Potion = require("../lib/Potion");
const Character = require("./Character.js");

class Player extends Character {
  constructor(name = "") {
    super(name);

    this.inventory = [new Potion("health"), new Potion()];
  }
  //returns object with various player properties
  getStats() {
    return {
      potions: this.inventory.length,
      health: this.health,
      strength: this.strength,
      agility: this.agility,
    };
  }

  //returns the inventory array or false if empty
  getInventory() {
    if (this.inventory.length) {
      return this.inventory;
    }

    return false;
  }

  addPotion(potion) {
    this.inventory.push(potion);
  }

  usePotion(index) {
    const potion = this.getInventory().splice(index, 1)[0];

    switch (potion.name) {
      case "agility":
        this.agility += potion.value;
        break;
      case "health":
        this.health += potion.value;
        break;
      case "strength":
        this.strength += potion.value;
        break;
    }
  }
}

//inherit prototype methods from Character
Player.prototype = Object.create(Character.prototype);

module.exports = Player;
