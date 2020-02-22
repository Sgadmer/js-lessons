const {
  createArray,
  createEmptyArrayWithLength,
  addToArray,
  addToStartArray,
  removeFromArrayFirst,
  joinArray,
  copyArray,
  mergeArray,
  filterArray,
  filterArrayCustom,
  reverseArray,
  sortArray,
  spliceArray,
  objectToArray,
  arrayToObject,
} = require('../src/array');


const getRandomString = () => Math.random().toString(36).substring(7);
const getRandomNumber = () => Math.floor(Math.random() * (10 - 0) + 0);

test('createArray: создать пустой массив', () => {
  const arr = createArray();
  expect(arr.length).toEqual(0);
  expect(arr).toEqual([]);
});

test('createEmptyArrayWithLength: создать массив указанной длинны', () => {
  const len = getRandomNumber();
  const arr = createEmptyArrayWithLength(len);
  expect(arr.length).toEqual(len)
});

test('addToArray: добавить новое значение в конец существующего массива', () => {
  const str = getRandomString();
  const arr = ['2', '3'];
  const result = addToArray(arr, str);
  expect(result.length).toEqual(3);
  expect(result[result.length - 1]).toEqual(str);
  expect(result === arr).toBeTruthy();
});

test('addToStartArray: Добавить новое значение в начало существующего массива', () => {
  const str = getRandomString();
  const arr = ['2', '3'];
  const result = addToStartArray(arr, str);
  expect(result.length).toEqual(3);
  expect(result[0]).toEqual(str);
  expect(result === arr).toBeTruthy();
});

test('removeFromArray: Удалить из массива первый элемент, вернуть измененный массив и удаленный элемент', () => {
  const str = getRandomString();
  const arr = [str, 'age', 'city'];
  const [ result, el ] = removeFromArrayFirst(arr);
  expect(result.length).toEqual(2);
  expect(el).toEqual(str);
  expect(result === arr).toBeTruthy();
});

test('joinArray: Соеденить элементы массива в строку', () => {
  const str1 = getRandomString();
  const str2 = getRandomString();
  const str3 = getRandomString();
  const sep = getRandomString();
  const arr = [str1, str2, str3];
  const result = joinArray(arr, sep);
  expect(result).toEqual(arr.join(sep));
});

test('copyArray: Создать копию массива', () => {
  const arr = [getRandomString(), getRandomString()];
  const result = copyArray(arr);
  expect(result).toEqual(arr);
});

test('mergeArray: объеденеить 2 массива ', () => {
  const arr = [getRandomString(), getRandomString()];
  const arr2 = [getRandomString(), getRandomString(), getRandomString()];
  const result = mergeArray(arr, arr2);
  expect(result).toEqual([...arr, ...arr2]);
});

test('filterArray: фильтрация элементов в массиве, хардкод', () => {
  const arr = [1, 3, 5, -1, 4, 5, 0];
  const result = filterArray(arr);
  expect(result).toEqual([3, 5, 4, 5]);
});

test('filterArrayCustom: свой сбособ фильтрации', () => {
  const arr = [1, 3, 5, -1, 4, 5, 0];
  const result = filterArrayCustom(arr, i => i > 3);
  expect(result !== arr).toBeTruthy();
  expect(result).toEqual([5, 4, 5]);
});

test('reverseArray: развернуть массив', () => {
  const arr = [1, 3, 5, -1, 4, 5, 0];
  const result = reverseArray(arr);
  expect(result !== arr).toBeTruthy();
  expect(result).toEqual([...arr].reverse());
});

test('sortArray: отсортировать массив по убыванию свойства age', () => {
  const arr = [
    { name: "Max", age: 12 },
    { name: "Max1", age: 51 },
    { name: "Max2", age: 4 },
    { name: "Max5", age: 0 },
  ];
  const result = sortArray(arr);
  expect(result !== arr).toBeTruthy();
  expect(result).toEqual([
    { name: "Max1", age: 51 },
    { name: "Max", age: 12 },
    { name: "Max2", age: 4 },
    { name: "Max5", age: 0 },
  ]);
});

test('spliceArray:  срез массива', () => {
  const arr = [1,2,3,4,5,6,7,8,9];
  const result = spliceArray(arr);
  expect(result !== arr).toBeTruthy();
  expect(result).toEqual([ [7, 8, 9], [4, 5, 6], [1, 2, 3] ])
});

test('objectToArray: перевести объект в массив', () => {
  const obj = { name: 'Max',  age: 22, city: 'FR' };
  const result = objectToArray(obj);
  expect(result.length).toEqual(3);
  expect(result).toEqual([ [ 'name', 'Max' ], ['age' , '22'], [ 'city', 'FR' ] ]) // Fr => FR
});

test('arrayToObject: перевести массив в объект', () => {
  const arr = [ [ 'name', 'Max' ], ['age' , '22'], [ 'city', 'FR' ] ];
  const result = arrayToObject(arr);
  expect(Object.keys(result).length).toEqual(3);
  expect(result).toEqual({ name: 'Max',  age: 22, city: 'FR' })
});
