import { add, divide, multiply, subtract } from "./calculator.js";

test("adds 1 + 2 to equal 3", () => {
  expect(add(1, 2)).toBe(3);
});

test("subtracts 2 - 1 to equal 1", () => {
  expect(subtract(2, 1)).toBe(1);
});

test("multiplies 2 * 3 to equal 6", () => {
  expect(multiply(2, 3)).toBe(6);
});

test('divide by 0', () => {
  expect(divide(6, 0)).toBe(Infinity);
});

test("divides 6 / 3 to equal 2", () => {
  expect(divide(6, 3)).toBe(2);
});
