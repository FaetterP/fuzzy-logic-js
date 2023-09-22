import { FuzzySet } from "../fuzzySets/FuzzySet";
import { Or } from "./or";
import { Slice } from "./slice";

export type Implication = { if: FuzzySet; then: FuzzySet; weight?: number };

export class Relationship {
  private ifs: FuzzySet[];
  private thens: FuzzySet[];
  private implications: Implication[];

  private matrix: number[][];

  constructor(ifs: FuzzySet[], thens: FuzzySet[], implications: Implication[]) {
    this.ifs = ifs;
    this.thens = thens;
    this.implications = implications;

    this.matrix = Array(ifs.length)
      .fill(undefined)
      .map(() => Array(thens.length).fill(undefined));

    for (let i = 0; i < ifs.length; i++) {
      for (let j = 0; j < thens.length; j++) {
        const implication = implications.find(
          (implication) =>
            implication.if === ifs[i] && implication.then === thens[j]
        );

        this.matrix[i][j] = implication?.weight || 1;
      }
    }
  }

  public solve(x: number, left: number, right: number): number {
    return this.getResultSet(x).defuzzyCentroid(left, right);
  }

  public getResultSet(x: number): FuzzySet {
    const ifsValues = this.getValues(this.ifs, x);
    for (let i = 0; i < this.ifs.length; i++) {
      for (let j = 0; j < this.thens.length; j++) {
        this.matrix[i][j] = Math.min(this.matrix[i][j], ifsValues[i]);
      }
    }

    const thensValue:number[] = [];
    for (let j = 0; j < this.thens.length; j++) {
      let max = 0;
      for (let i = 0; i < this.ifs.length; i++) {
        if (max < this.matrix[i][j]) {
          max = this.matrix[i][j];
        }
      }
      thensValue.push(max);
    }

    const finalSet = Or(
      ...this.thens.map((then, index) => Slice(then, thensValue[index]))
    );
    return finalSet;
  }

  private getValues(sets: FuzzySet[], x: number): number[] {
    const ret: number[] = [];

    for (const set of sets) {
      ret.push(set.getValue(x));
    }

    return ret;
  }
}
