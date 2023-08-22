import {forEach} from './forEach'

describe("forEach()", ()=>{
  test("should do a callback for this array", ()=>{
    const stub = jest.fn();

    forEach([1, 2, 3], stub);

    expect(stub).toBeCalledTimes(3);

  })
  test("should return undefined with empty array", () => {
    return expect(forEach([], (element)=>{
      console.log(element);
    })).toEqual(undefined);
  })
})