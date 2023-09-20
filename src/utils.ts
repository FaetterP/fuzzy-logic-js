export function Integral(
  f: (x: number) => number,
  left: number,
  right: number,
  step: number = 0.1
) {
  let result = 0;

  for (let i = left; i <= right; i += step) {
    result += step * f(i);
  }

  return result;
}
