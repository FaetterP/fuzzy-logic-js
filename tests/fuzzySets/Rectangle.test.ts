import { Rectangle } from "../../src/fuzzySets/Rectangle";

describe("Rectangle", () => {
  test("success", () => {
    const p1 = 5;
    const p2 = 7;

    const rectangle = new Rectangle(p1, p2);

    expect(rectangle.getValue(p1 - 1)).toBe(0);
    expect(rectangle.getValue(p2 + 1)).toBe(0);

    expect(rectangle.getValue(p2 - 1)).toBe(1);
    
    expect(rectangle.getValue(p1)).toBe(1);
    expect(rectangle.getValue(p2)).toBe(1);
  });

  test("error | p1<p2", () => {
    const p1 = 7;
    const p2 = 5;

    expect(() => {
      new Rectangle(p1, p2);
    }).toThrow("Invalid arguments values.");
  });
});
