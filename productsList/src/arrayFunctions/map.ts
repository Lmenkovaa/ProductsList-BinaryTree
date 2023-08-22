export function map<T, B>(array: T[], callback: (item:T, index:number, array:T[]) => B): B[] {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    result.push(callback(array[i], i, array));
  }
  return result;
}