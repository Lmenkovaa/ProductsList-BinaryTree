//TODO: fix types
export function reduce <T, B>(array: T[], callback: (accumulator: any, item:T, index: number, array?: T[]) => any, initAcc?: B | T) {
  if (array.length == 0) return 0;
  let accumulator = initAcc || array[0];
  for (let i = initAcc ? 0 : 1; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }
  return accumulator;
}