class Ninja {
    constructor(name, health){
        this.name = name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }

    sayName(){
        console.log(`Welcome to the ring ${this.name}`);
    }

    showStats(){
        console.log(`Ninja ${this.name}, has a health ${this.health}, coming at you with speed of ${this.speed}, with a strength of ${this.strength}`);
    }

    drinkSake(){
        console.log(`Your Ninja ${this.name} has gained a health of +10`);
        this.health += 10;
    }
}
const ninja1 = new Ninja("Tom", 50);
const ninja2 = new Ninja("Webster", 30);

ninja1.showStats();
ninja1.drinkSake();
ninja1.showStats();
ninja2.drinkSake();
ninja2.drinkSake();
ninja2.drinkSake();
ninja2.drinkSake();
ninja1.showStats();
ninja2.showStats();
