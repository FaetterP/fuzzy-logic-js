import { Integral } from "../utils";

export abstract class FuzzySet {
  public abstract getValue(value: number): number;

  public step = 0.01;

  public defuzzyMaxLeft(left: number, right: number): number {
    if (left > right) throw new Error("Invalid boundaries.");

    let y = 0;
    let x = left;

    for (let i = left; i < right; i += this.step) {
      const value = this.getValue(i);
      if (y < value) {
        y = value;
        x = i;
      }
    }

    return x;
  }

  public defuzzyMaxRight(left: number, right: number): number {
    if (left > right) throw new Error("Invalid boundaries.");

    let y = 0;
    let x = left;

    for (let i = left; i < right; i += this.step) {
      const value = this.getValue(i);
      if (y <= value) {
        y = value;
        x = i;
      }
    }

    return x;
  }

  public defuzzyMaxMiddle(left: number, right: number): number {
    if (left > right) throw new Error("Invalid boundaries.");

    let yRight = 0;
    let xRight = left;
    let yLeft = 0;
    let xLeft = left;

    for (let i = left; i < right; i += this.step) {
      const value = this.getValue(i);

      if (yRight <= value) {
        yRight = value;
        xRight = i;
      }

      if (yLeft < value) {
        yLeft = value;
        xLeft = i;
      }
    }

    return (xRight + xLeft) / 2;
  }

  public defuzzyCentroid(left: number, right: number): number {
    if (left > right) throw new Error("Invalid boundaries.");

    const numerator = Integral(
      (x: number) => x * this.getValue(x),
      left,
      right
    );
    const denominator = Integral(this.getValue.bind(this), left, right);

    if (denominator === 0) {
      return (left + right) / 2;
    }

    return numerator / denominator;
  }
}
