import {describe, expect, test} from '@jest/globals';
import { map } from './map';

describe("map()", () => {
  test("should calculate length of the elements & return numbers array", () => {
    return expect(
      map(["Bilbo", "Gandalf", "Nazgul"], (item) => {
        return item.length;
      })
    ).toEqual([5, 7, 6]);
  });
  test("should return amounts array from array of objects", () => {
    return expect(map([
      { name: 'Igor', amount: 19 },
      { name: 'Danil', amount: 1 },
      { name: 'Ivan', amount: 4 },
      { name: 'Matvey', amount: 16 },
    ], (item) => {
      return item.amount;
    })).toEqual([19, 1, 4, 16]);
  });
  test("should return names array from array of objects", () => {
    return expect(map([
      { name: 'Igor', amount: 19},
      { name: 'Danil', amount: 1 },
      { name: 'Ivan', amount: 4 },
      { name: 'Matvey', amount: 16 },
    ], (item) => {
      return item.name;
    })).toEqual(['Igor', 'Danil', 'Ivan', 'Matvey']);
  })
})