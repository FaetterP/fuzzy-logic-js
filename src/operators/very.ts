import { FuzzySet } from "../types";

export class VerySet implements FuzzySet {
  private fuzzySet: FuzzySet;
  private degree: number;

  constructor(fuzzySet: FuzzySet, degree: number) {
    this.fuzzySet = fuzzySet;
    this.degree = degree;
  }

  getValue(x: number): number {
    return this.fuzzySet.getValue(x) ** this.degree;
  }
}

export function Very(fuzzySet: FuzzySet, degree: number = 2) {
  return new VerySet(fuzzySet, degree);
}
