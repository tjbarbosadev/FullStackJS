export default class Column {
  constructor(readonly name: string, readonly hasEstimative: boolean) {
    this.name = name;
    this.hasEstimative = hasEstimative
  }
}