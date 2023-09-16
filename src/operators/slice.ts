import { FuzzySet } from "../fuzzySets/FuzzySet";

export class SliceSet extends FuzzySet {
  private fuzzySet: FuzzySet;
  private limit: number;

  constructor(fuzzySet: FuzzySet, limit: number) {
    super();

    this.fuzzySet = fuzzySet;
    this.limit = limit;
  }

  getValue(x: number): number {
    return Math.min(this.limit, this.fuzzySet.getValue(x));
  }
}

export function Slice(fuzzySet: FuzzySet, limit: number) {
  return new SliceSet(fuzzySet, limit);
}
