import { Triangle } from "../../src/fuzzySets/Triangle";

function expectFloat(expected: number) {
  return {
    toBe: (received: number, epsilon: number = Number.EPSILON) => {
      if (Math.abs(expected - received) <= epsilon === false)
        console.log(
          expected,
          received,
          Math.abs(expected - received),
          Math.abs(expected - received) <= epsilon
        );
      expect(Math.abs(expected - received) <= epsilon).toBe(true);
    },
  };
}

describe("Triangle", () => {
  test("success | getValue", () => {
    const p1 = 5;
    const p2 = 7;
    const p3 = 9;

    const triangle = new Triangle(p1, p2, p3);

    expectFloat(triangle.getValue(p1 - 1)).toBe(0);
    expectFloat(triangle.getValue(p3 + 1)).toBe(0);

    expectFloat(triangle.getValue((p2 - p1) / 10 + p1)).toBe(0.1);
    expectFloat(triangle.getValue((p1 + p2) / 2)).toBe(0.5);
    expectFloat(triangle.getValue(((p2 - p1) / 10) * 9 + p1)).toBe(0.9);

    expectFloat(triangle.getValue((p2 + p3) / 2)).toBe(0.5);

    expectFloat(triangle.getValue(p1)).toBe(0);
    expectFloat(triangle.getValue(p2)).toBe(1);
    expectFloat(triangle.getValue(p3)).toBe(0);
  });

  test("success | defuzzyMaxLeft", () => {
    const triangle = new Triangle(5, 7, 9);

    expectFloat(triangle.defuzzyMaxLeft(4, 10)).toBe(7);
    expectFloat(triangle.defuzzyMaxLeft(5, 9)).toBe(7);
    expectFloat(triangle.defuzzyMaxLeft(5.5, 9)).toBe(7);
    expectFloat(triangle.defuzzyMaxLeft(5, 8.5)).toBe(7);
    expectFloat(triangle.defuzzyMaxLeft(5.5, 8.5)).toBe(7);
    expectFloat(triangle.defuzzyMaxLeft(7, 9)).toBe(7);
    expectFloat(triangle.defuzzyMaxLeft(7, 10)).toBe(7);
    expectFloat(triangle.defuzzyMaxLeft(4, 7)).toBe(7);
    expectFloat(triangle.defuzzyMaxLeft(5, 6)).toBe(6, 2.2e-14);
    expectFloat(triangle.defuzzyMaxLeft(5, 5.5)).toBe(5.5, 1.1e-14);
    expectFloat(triangle.defuzzyMaxLeft(7.5, 9)).toBe(7.5);
    expectFloat(triangle.defuzzyMaxLeft(8, 9)).toBe(8);

    expectFloat(triangle.defuzzyMaxLeft(6, 6)).toBe(6);
    expectFloat(triangle.defuzzyMaxLeft(7, 7)).toBe(7);
    expectFloat(triangle.defuzzyMaxLeft(9, 9)).toBe(9);
    expectFloat(triangle.defuzzyMaxLeft(5, 5)).toBe(5);
    expectFloat(triangle.defuzzyMaxLeft(4, 4)).toBe(4);
    expectFloat(triangle.defuzzyMaxLeft(10, 10)).toBe(10);
  });

  test("success | defuzzyMaxRight", () => {
    const triangle = new Triangle(5, 7, 9);

    expectFloat(triangle.defuzzyMaxRight(4, 10)).toBe(7);
    expectFloat(triangle.defuzzyMaxRight(5, 9)).toBe(7);
    expectFloat(triangle.defuzzyMaxRight(5.5, 9)).toBe(7);
    expectFloat(triangle.defuzzyMaxRight(5, 8.5)).toBe(7);
    expectFloat(triangle.defuzzyMaxRight(5.5, 8.5)).toBe(7);
    expectFloat(triangle.defuzzyMaxRight(7, 9)).toBe(7);
    expectFloat(triangle.defuzzyMaxRight(7, 10)).toBe(7);
    expectFloat(triangle.defuzzyMaxRight(4, 7)).toBe(7);
    expectFloat(triangle.defuzzyMaxRight(5, 6)).toBe(6, 2.2e-14);
    expectFloat(triangle.defuzzyMaxRight(5, 5.5)).toBe(5.5, 1.1e-14);
    expectFloat(triangle.defuzzyMaxRight(7.5, 9)).toBe(7.5);
    expectFloat(triangle.defuzzyMaxRight(8, 9)).toBe(8);

    expectFloat(triangle.defuzzyMaxRight(6, 6)).toBe(6);
    expectFloat(triangle.defuzzyMaxRight(7, 7)).toBe(7);
    expectFloat(triangle.defuzzyMaxRight(9, 9)).toBe(9);
    expectFloat(triangle.defuzzyMaxRight(5, 5)).toBe(5);
    expectFloat(triangle.defuzzyMaxRight(4, 4)).toBe(4);
    expectFloat(triangle.defuzzyMaxRight(10, 10)).toBe(10);
  });

  test("success | defuzzyMaxMiddle", () => {
    const triangle = new Triangle(5, 7, 9);

    expectFloat(triangle.defuzzyMaxMiddle(4, 10)).toBe(7);
    expectFloat(triangle.defuzzyMaxMiddle(5, 9)).toBe(7);
    expectFloat(triangle.defuzzyMaxMiddle(5.5, 9)).toBe(7);
    expectFloat(triangle.defuzzyMaxMiddle(5, 8.5)).toBe(7);
    expectFloat(triangle.defuzzyMaxMiddle(5.5, 8.5)).toBe(7);
    expectFloat(triangle.defuzzyMaxMiddle(7, 9)).toBe(7);
    expectFloat(triangle.defuzzyMaxMiddle(7, 10)).toBe(7);
    expectFloat(triangle.defuzzyMaxMiddle(4, 7)).toBe(7);
    expectFloat(triangle.defuzzyMaxMiddle(5, 6)).toBe(6, 2.2e-14);
    expectFloat(triangle.defuzzyMaxMiddle(5, 5.5)).toBe(5.5, 1.1e-14);
    expectFloat(triangle.defuzzyMaxMiddle(7.5, 9)).toBe(7.5);
    expectFloat(triangle.defuzzyMaxMiddle(8, 9)).toBe(8);

    expectFloat(triangle.defuzzyMaxMiddle(6, 6)).toBe(6);
    expectFloat(triangle.defuzzyMaxMiddle(7, 7)).toBe(7);
    expectFloat(triangle.defuzzyMaxMiddle(9, 9)).toBe(9);
    expectFloat(triangle.defuzzyMaxMiddle(5, 5)).toBe(5);
    expectFloat(triangle.defuzzyMaxMiddle(4, 4)).toBe(4);
    expectFloat(triangle.defuzzyMaxMiddle(10, 10)).toBe(10);
  });

  test("success | defuzzyCentroid", () => {
    const triangle = new Triangle(5, 7, 9);

    // expectFloat(triangle.defuzzyCentroid(4, 10)).toBe(7, 8.9e-16);
    // expectFloat(triangle.defuzzyCentroid(5, 9)).toBe(7, 8.9e-16);
    // expectFloat(triangle.defuzzyCentroid(5.5, 9)).toBe(7, 0.05);
    // expectFloat(triangle.defuzzyCentroid(5, 8.5)).toBe(7, 0.05);
    // expectFloat(triangle.defuzzyCentroid(5.5, 8.5)).toBe(7, 0.05);
    // expectFloat(triangle.defuzzyCentroid(7, 9)).toBe(7, 0.7);
    // expectFloat(triangle.defuzzyCentroid(7, 10)).toBe(7, 0.7);
    // expectFloat(triangle.defuzzyCentroid(4, 7)).toBe(7, 0.7);
    // expectFloat(triangle.defuzzyCentroid(5, 6)).toBe(6, 0.05);
    // expectFloat(triangle.defuzzyCentroid(5, 5.5)).toBe(5.5, 0.05);
    // expectFloat(triangle.defuzzyCentroid(7.5, 9)).toBe(7.5, 0.05);
    // expectFloat(triangle.defuzzyCentroid(8, 9)).toBe(8, 0.05);

    expectFloat(triangle.defuzzyCentroid(6, 6)).toBe(6, 8.9e-16);
    expectFloat(triangle.defuzzyCentroid(7, 7)).toBe(7, 8.9e-16);
    expectFloat(triangle.defuzzyCentroid(9, 9)).toBe(9, 8.9e-16);
    expectFloat(triangle.defuzzyCentroid(5, 5)).toBe(5, 8.9e-16);
    expectFloat(triangle.defuzzyCentroid(4, 4)).toBe(4, 8.9e-16);
    expectFloat(triangle.defuzzyCentroid(10, 10)).toBe(10, 8.9e-16);
  });

  test("error | p1=p2, p2=p3, p1=3", () => {
    expect(() => {
      new Triangle(5, 5, 6);
    }).toThrow("Invalid arguments values.");
    expect(() => {
      new Triangle(5, 6, 6);
    }).toThrow("Invalid arguments values.");
    expect(() => {
      new Triangle(5, 6, 5);
    }).toThrow("Invalid arguments values.");
  });

  test("error | p1<p3<p2, p2<p1<p3, p2<p3<p1, p3<p1<p2, p3<p2<p1", () => {
    expect(() => {
      new Triangle(1, 3, 2);
    }).toThrow("Invalid arguments values.");
    expect(() => {
      new Triangle(2, 1, 3);
    }).toThrow("Invalid arguments values.");
    expect(() => {
      new Triangle(3, 1, 2);
    }).toThrow("Invalid arguments values.");
    expect(() => {
      new Triangle(2, 3, 1);
    }).toThrow("Invalid arguments values.");
    expect(() => {
      new Triangle(3, 2, 1);
    }).toThrow("Invalid arguments values.");
  });

  test("error | left>right", () => {
    const triangle = new Triangle(1, 2, 3);

    expect(() => {
      triangle.defuzzyMaxLeft(2, 1);
    }).toThrow("Invalid boundaries.");
    expect(() => {
      triangle.defuzzyMaxRight(2, 1);
    }).toThrow("Invalid boundaries.");
    expect(() => {
      triangle.defuzzyMaxMiddle(2, 1);
    }).toThrow("Invalid boundaries.");
    expect(() => {
      triangle.defuzzyCentroid(2, 1);
    }).toThrow("Invalid boundaries.");
  });
});
