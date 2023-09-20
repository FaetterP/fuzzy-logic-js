import { FuzzySet } from "./FuzzySet";

export class Sigmoid extends FuzzySet {
  private mu: number;
  private sigma: number;
  private y: number;

  constructor(mu: number, sigma: number, y: number = 1) {
    super();

    this.mu = mu;
    this.sigma = sigma;
    this.y = y;
  }

  getValue(value: number): number {
    const degree = (value - this.mu) * this.sigma;
    return (1 / (1 + Math.exp(-degree))) * this.y;
  }
}
