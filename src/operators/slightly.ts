import { FuzzySet } from "../types";

export class SlightlySet implements FuzzySet {
  private fuzzySet: FuzzySet;
  private degree: number;

  constructor(fuzzySet: FuzzySet, degree: number) {
    this.fuzzySet = fuzzySet;
    this.degree = degree;
  }

  getValue(x: number): number {
    return this.fuzzySet.getValue(x) ** (1 / this.degree);
  }
}

export function Slightly(fuzzySet: FuzzySet, degree: number = 2) {
  return new SlightlySet(fuzzySet, degree);
}
