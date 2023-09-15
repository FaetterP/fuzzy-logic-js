import { Triangle } from "../../src/fuzzySets/Triangle";

describe("Rectangle", () => {
  test("success", () => {
    const p1 = 5;
    const p2 = 7;
    const p3 = 9;

    const rectangle = new Triangle(p1, p2, p3);

    expect(rectangle.getValue(p1 - 1)).toBe(0);
    expect(rectangle.getValue(p3 + 1)).toBe(0);

    expect(rectangle.getValue((p2 - p1) / 10 + p1)).toBe(0.1);
    expect(rectangle.getValue((p1 + p2) / 2)).toBe(0.5);
    expect(rectangle.getValue(((p2 - p1) / 10) * 9 + p1)).toBe(0.9);

    expect(rectangle.getValue((p2 + p3) / 2)).toBe(0.5);

    expect(rectangle.getValue(p1)).toBe(0);
    expect(rectangle.getValue(p2)).toBe(1);
    expect(rectangle.getValue(p3)).toBe(0);
  });

  test("error | p1=p2", () => {
    const p1 = 5;
    const p2 = 5;
    const p3 = 7;

    expect(() => {
      new Triangle(p1, p2, p3);
    }).toThrow("Invalid arguments values.");
  });
});
