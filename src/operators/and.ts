import { FuzzySet } from "../fuzzySets/FuzzySet";

export class AndSet extends FuzzySet {
  private fuzzySets: FuzzySet[];

  constructor(fuzzySets: FuzzySet[]) {
    super();

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
