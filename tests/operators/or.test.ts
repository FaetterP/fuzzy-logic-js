import { Rectangle } from "../../src/fuzzySets/Rectangle";
import { Triangle } from "../../src/fuzzySets/Triangle";
import { Or } from "../../src/operators/or";

describe("Or", () => {
  test("success", () => {
    const rectangle = new Rectangle(0, 10);
    const triangle = new Triangle(-6, -1, 4);
    const finalSet = Or(rectangle, triangle);

    expect(finalSet.getValue(-6)).toBe(0);
    expect(finalSet.getValue(11)).toBe(0);

    expect(finalSet.getValue(-5)).toBe(0.2);
    expect(finalSet.getValue(-4)).toBe(0.4);
    expect(finalSet.getValue(-3)).toBe(0.6);
    expect(finalSet.getValue(-2)).toBe(0.8);
    expect(finalSet.getValue(-0.5)).toBe(0.9);

    expect(finalSet.getValue(-6)).toBe(0);
    expect(finalSet.getValue(-1)).toBe(1);
    expect(finalSet.getValue(0)).toBe(1);
    expect(finalSet.getValue(4)).toBe(1);
    expect(finalSet.getValue(10)).toBe(1);
  });
});
