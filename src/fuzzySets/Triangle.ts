import { FuzzySet } from "./FuzzySet";

export class Triangle extends FuzzySet {
  private p1: number;
  private p2: number;
  private p3: number;

  private y: number;

  constructor(p1: number, p2: number, p3: number, y: number = 1) {
    if (p1 >= p2 || p2 >= p3 || p1 >= p3)
      throw new Error("Invalid arguments values.");

    super();

    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;

    this.y = y;
  }

  public getValue(x: number): number {
    if (x < this.p1 || x > this.p3) return 0;

    if (x < this.p2) {
      const slope = this.y / (this.p2 - this.p1);
      const intercept = (-this.y * this.p1) / (this.p2 - this.p1);
      return slope * x + intercept;
    } else {
      const slope = -this.y / (this.p3 - this.p2);
      const intercept = (this.y * this.p3) / (this.p3 - this.p2);
      return slope * x + intercept;
    }
  }

  public defuzzyMaxLeft(left: number, right: number): number {
    if (left > right) throw new Error("Invalid boundaries.");

    if (this.p2 >= left && this.p2 <= right) {
      return this.p2;
    }

    return super.defuzzyMaxLeft(left, right);
  }

  public defuzzyMaxRight(left: number, right: number): number {
    if (left > right) throw new Error("Invalid boundaries.");

    if (this.p2 >= left && this.p2 <= right) {
      return this.p2;
    }

    return super.defuzzyMaxRight(left, right);
  }

  public defuzzyMaxMiddle(left: number, right: number): number {
    if (left > right) throw new Error("Invalid boundaries.");

    if (this.p2 >= left && this.p2 <= right) {
      return this.p2;
    }

    return super.defuzzyMaxMiddle(left, right);
  }

  public defuzzyCentroid(left: number, right: number): number {
    if (left > right) throw new Error("Invalid boundaries.");

    if (this.p1 >= left && this.p3 <= right) {
      return super.defuzzyCentroid(this.p1, this.p3);
    }

    return super.defuzzyCentroid(left, right);
  }
}
