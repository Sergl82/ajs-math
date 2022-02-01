import Character from './character';

export default class MathCharacter extends Character {
  constructor(name, type) {
    super(name, type);
    this.distance = 0;
    this.stoned = false;
  }

  get stoned() {
    return this.updStoned;
  }

  set stoned(value) {
    this.updStoned = value;
  }

  get attack() {
    let attack = this.updAttack * ((11 - this.distance) * 0.1);
    if (this.stoned === true) {
      attack -= Math.log2(this.distance) * 5;
      return Math.round(attack);
    }
    return attack;
  }

  set attack(value) {
    this.updAttack = value;
  }
}
