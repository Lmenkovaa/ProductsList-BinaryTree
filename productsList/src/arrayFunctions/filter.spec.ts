import { filter } from './filter'

describe("filter()", () => {
  test("should return array of the items if their size more than 5", () => {
    expect(
      filter(["Bilbo", "Gandalf", "Nazgul", "Gandalfao"], (item) => {
        return item.length > 5;
      })
    ).toEqual(["Gandalf", "Nazgul", "Gandalfao"]);
  });
  test("should return empty array if dont have any items with size more than 5", () => {
    expect(
      filter(["l", "ll", "lll", "llll", "llll"], (item) => {
        return item.length > 5
      })
    ).toEqual([]);
  })
})