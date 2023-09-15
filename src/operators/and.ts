import { FuzzySet } from "../types";

export class AndSet implements FuzzySet {
  private fuzzySets: FuzzySet[];

  constructor(fuzzySets: FuzzySet[]) {
    this.fuzzySets = fuzzySets;
  }

  getValue(x: number): number {
    const values = this.fuzzySets.map((set) => set.getValue(x));
    return Math.min.apply(null, values);
  }
}

export function And(...fuzzySets: FuzzySet[]) {
  return new AndSet(fuzzySets);
}
