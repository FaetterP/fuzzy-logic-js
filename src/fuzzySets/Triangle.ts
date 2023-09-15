import { FuzzySet } from "../types";

export class Triangle implements FuzzySet {
  private p1: number;
  private p2: number;
  private p3: number;

  private y: number;

  constructor(p1: number, p2: number, p3: number) {
    if (p1 > p2 || p2 > p3 || p1 > p3)
      throw new Error("Invalid arguments values.");

    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;

    this.y = 1;
  }

  getValue(value: number): number {
    if (value < this.p1 || value > this.p3) return 0;

    if (value < this.p2) {
      const slope = this.y / (this.p2 - this.p1);
      const intercept = (-this.y * this.p1) / (this.p2 - this.p1);
      return slope * value + intercept;
    } else {
      const slope = -this.y / (this.p3 - this.p2);
      const intercept = (this.y * this.p3) / (this.p3 - this.p2);
      return slope * value + intercept;
    }
  }
}
