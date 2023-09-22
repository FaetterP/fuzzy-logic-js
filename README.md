# fuzzy-logic-js

## Fuzzy sets

- Rectangle
- Triangle
- Trapezoid
- Sigmoid
- Gaussian

If you want to create custom fuzzy set, then you need to extend the base class and implements abstract method `getValue` for this.

```js
import { FuzzySet } from "fuzzylogic-js"

export class CustomFuzzySet extends FuzzySet {
  public getValue(value: number): number {
    return ...;
  }
}
```

You can defuzzy this sets to number.

- Left maximum
- Right maximum
- Center maximum
- Centroid

```js
import { Triangle } from "fuzzylogic-js";

const fast = new Triangle(700, 900, 1000);
const result = fast.defuzzyCentroid(500, 1100);
```

## Operators

- And
- Or
- Not
- Slice
- Very
- Slightly

## Relationships

You need to provide input and output fuzzy sets and implications.

```js
const cold = Or(new Rectangle(-Infinity, 10), new Triangle(9, 10, 15));
const warm = new Triangle(15, 25, 35);
const hot = Or(new Rectangle(35, Infinity), new Triangle(25, 35, 36));

const slow = new Triangle(600, 700, 800);
const fast = new Triangle(700, 900, 1000);

const inputs = [cold, warm, hot];
const outputs = [slow, fast];

const implications: Implication[] = [
  { if: cold, then: slow, weight: 1 },
  { if: warm, then: slow, weight: 0.7 },
  { if: hot, then: slow, weight: 0.1 },
  { if: cold, then: fast, weight: 0 },
  { if: hot, then: fast },
];

const rel = new Relationship(inputs, outputs, implications);

const temperature = 27;
const leftLimit = 500;
const rightLimit = 500;

const speed = rel.solve(temperature, leftLimit, rightLimit);
```
