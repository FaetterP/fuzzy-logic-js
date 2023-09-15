import { FuzzySet } from "../types";

export class NotSet implements FuzzySet {
  private fuzzySet: FuzzySet;

  constructor(fuzzySet: FuzzySet) {
    this.fuzzySet = fuzzySet;
  }

  getValue(x: number): number {
    return 1 - this.fuzzySet.getValue(x);
  }
}

export function Not(fuzzySet: FuzzySet) {
  return new NotSet(fuzzySet);
}
