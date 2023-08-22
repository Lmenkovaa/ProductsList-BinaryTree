import {reduce} from './reduce'

describe("reduce()", () => {
  test("should work with default array & initial accomulator", () => {
    expect(
      reduce(
        [1, 2, 3],
        (sum, current) => {
          return sum + current;
        },
        0
      )
    ).toBe(6);
  });
  test("should work with default array & without initial accomulator", () => {
    expect(
      reduce([1, 2, 3], (sum, current) => {
        return sum + current;
      })
    ).toBe(6);
  });
  test("should call array.length-1 times without innitAcc", () => {
    const stub = jest.fn();

    reduce([1, 2, 3], stub);

    expect(stub).toBeCalledTimes(2);
  });
  test("should work without empty array and return 0", () => {
    expect(
      reduce([], (sum, current) => {
        return sum + current;
      })
    ).toBe(0);
  });
});