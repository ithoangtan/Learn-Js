class Hero {
  constructor(name, hp, damage) {
    this.name = name;
    this.hp = hp;
    this.damage = damage;
  }

  applyDamage(damage) {
    this.hp -= damage;
  }

  acttack(enemy) {
    enemy.applyDamage(this.damage);
  }
}

class RangeHero extends Hero {
  constructor(name, hp, damage, range) {
    super(name, hp, damage);
    this.range = range;
  }
  acttack(enemy) {
    super.acttack(enemy);
    this.hp += this.damage * 0.2;
  }
}

const heroA = new RangeHero("A", 100, 10, 10);
const heroB = new Hero("B", 200, 5);
console.log({ heroA, heroB });
heroA.acttack(heroB);
console.log({ heroA, heroB });
