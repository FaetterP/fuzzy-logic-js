import { FuzzySet } from "./FuzzySet";

export class Trapezoid extends FuzzySet {
  private p1: number;
  private p2: number;
  private p3: number;
  private p4: number;

  private y: number;

  constructor(p1: number, p2: number, p3: number, p4: number, y: number = 1) {
    if (p1 > p2 || p2 > p3 || p1 > p3 || p1 > p4 || p2 > p4 || p3 > p4)
      throw new Error("Invalid arguments values.");

    super();

    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.p4 = p4;

    this.y = y;
  }

  getValue(value: number): number {
    if (value < this.p1 || value > this.p4) return 0;

    if (value < this.p2) {
      const slope = this.y / (this.p2 - this.p1);
      const intercept = (-this.y * this.p1) / (this.p2 - this.p1);
      return slope * value + intercept;
    } else if (value < this.p3) {
      return this.y;
    } else {
      const slope = -this.y / (this.p4 - this.p3);
      const intercept = (this.y * this.p4) / (this.p4 - this.p3);
      return slope * value + intercept;
    }
  }

  public defuzzyMaxLeft(left: number, right: number): number {
    if (left > right) throw new Error("Invalid boundaries.");

    if (this.p2 >= left) {
      return this.p2;
    }

    return super.defuzzyMaxLeft(left, right);
  }

  public defuzzyMaxRight(left: number, right: number): number {
    if (left > right) throw new Error("Invalid boundaries.");

    if (this.p3 <= right) {
      return this.p3;
    }

    return super.defuzzyMaxRight(left, right);
  }

  public defuzzyMaxMiddle(left: number, right: number): number {
    if (left > right) throw new Error("Invalid boundaries.");

    if (this.p2 >= left && this.p3 <= right) {
      return (this.p2 + this.p3) / 2;
    }

    return super.defuzzyMaxMiddle(left, right);
  }

  public defuzzyCentroid(left: number, right: number): number {
    if (left > right) throw new Error("Invalid boundaries.");

    if (this.p1 >= left && this.p4 <= right) {
      return super.defuzzyCentroid(this.p1, this.p3);
    }

    return super.defuzzyCentroid(left, right);
  }
}
