import MathCharacter from './mathCharacter';

export default class Magician extends MathCharacter {
  constructor(name) {
    super(name, 'Magician');
    this.defence = 40;
  }
}
