export function forEach <T>(array: T[], callback: (item: T, index: number, array: T[]) => void){
  for(let i=0; i < array.length; i++){
    callback(array[i], i, array);
  }
}