import { Car } from "./car";

describe("Car", () => {
  let car;

  beforeEach(() => {
    car = new Car();
  });

  it("has 4 wheels", () => {
    expect(car.wheels).toBe(4);
  });

  it("can drive", () => {
    expect(car.drive).toBeDefined();
    expect(car.drive()).toBe("Vroom!");
  });

  it("can stop", () => {
    expect(car.stop).toBeDefined();
  });

  it("can tell you its current speed", () => {
    expect(car.currentSpeed()).toBe(70);
  });
});
