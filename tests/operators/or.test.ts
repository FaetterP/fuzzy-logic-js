import { Rectangle } from "../../src/fuzzySets/Rectangle";
import { Triangle } from "../../src/fuzzySets/Triangle";
import { Or } from "../../src/operators/or";

function expectFloat(expected: number) {
  return {
    toBe: (received: number) => {
      expect(Math.abs(expected - received) <= Number.EPSILON).toBe(true);
    },
  };
}

describe("Or", () => {
  test("success | getValue", () => {
    const rectangle = new Rectangle(0, 10);
    const triangle = new Triangle(-6, -1, 4);
    const finalSet = Or(rectangle, triangle);

    expectFloat(finalSet.getValue(-7)).toBe(0);
    expectFloat(finalSet.getValue(11)).toBe(0);

    expectFloat(finalSet.getValue(-5)).toBe(0.2);
    expectFloat(finalSet.getValue(-4)).toBe(0.4);
    expectFloat(finalSet.getValue(-3)).toBe(0.6);
    expectFloat(finalSet.getValue(-2)).toBe(0.8);
    expectFloat(finalSet.getValue(-0.5)).toBe(0.9);

    expectFloat(finalSet.getValue(-6)).toBe(0);
    expectFloat(finalSet.getValue(-1)).toBe(1);
    expectFloat(finalSet.getValue(0)).toBe(1);
    expectFloat(finalSet.getValue(4)).toBe(1);
    expectFloat(finalSet.getValue(10)).toBe(1);
  });
});
