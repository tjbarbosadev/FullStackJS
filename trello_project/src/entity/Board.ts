export default class Board {
  constructor(readonly name: string) {
    if(name === '') throw new Error('Board must have a name');
    this.name = name;
  }
}