import { FuzzySet } from "../types";

export class OrSet implements FuzzySet {
  private fuzzySets: FuzzySet[];

  constructor(fuzzySets: FuzzySet[]) {
    this.fuzzySets = fuzzySets;
  }

  getValue(x: number): number {
    const values = this.fuzzySets.map((set) => set.getValue(x));
    return Math.max.apply(null, values);
  }
}

export function Or(...fuzzySets: FuzzySet[]) {
  return new OrSet(fuzzySets);
}
