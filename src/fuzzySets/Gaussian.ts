import { FuzzySet } from "./FuzzySet";

export class Gaussian extends FuzzySet {
  private mu: number;
  private sigma: number;
  private y: number;
  private maxValue: number;

  constructor(mu: number, sigma: number, y: number = 1) {
    super();

    this.mu = mu;
    this.sigma = sigma;
    this.y = y;
    this.maxValue = this.getDefaultValue(this.mu);
  }

  public getValue(value: number): number {
    return (this.getDefaultValue(value) / this.maxValue) * this.y;
  }

  private getDefaultValue(value: number): number {
    const degree = ((value - this.mu) / this.sigma) ** 2 / -2;
    return Math.exp(degree) / (this.sigma * Math.sqrt(2 * Math.PI));
  }
}
