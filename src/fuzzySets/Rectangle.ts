import { FuzzySet } from "./FuzzySet";

export class Rectangle extends FuzzySet {
  private p1: number;
  private p2: number;

  constructor(p1: number, p2: number) {
    if (p1 > p2) throw new Error("Invalid arguments values.");

    super();

    this.p1 = p1;
    this.p2 = p2;
  }

  getValue(value: number): number {
    if (value < this.p1 || value > this.p2) return 0;

    return 1;
  }
}
