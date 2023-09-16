export abstract class FuzzySet {
  public abstract getValue(value: number): number;

  public step = 0.01;

  public defuzzyMaxLeft(left: number, right: number): number {
    let y = 0;
    let x = 0;

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
    let y = 0;
    let x = 0;

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
    let yRight = 0;
    let xRight = 0;
    let yLeft = 0;
    let xLeft = 0;

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
}