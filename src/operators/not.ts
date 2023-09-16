import { FuzzySet } from "../fuzzySets/FuzzySet";

export class NotSet extends FuzzySet {
  private fuzzySet: FuzzySet;

  constructor(fuzzySet: FuzzySet) {
    super();

    this.fuzzySet = fuzzySet;
  }

  getValue(x: number): number {
    return 1 - this.fuzzySet.getValue(x);
  }
}

export function Not(fuzzySet: FuzzySet) {
  return new NotSet(fuzzySet);
}
