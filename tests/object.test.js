const {
  createObject,
  getCountOfProp,
  copyObject,
  mergeObject,
  hasKey,
  addToObject,
  removeKey,
  sameKeysObj,
  differentKeysObj,
} = require('../src/object');

const getRandomObject = () => {
  const c = Math.floor(Math.random() * Math.floor(10));
  const emptyArray = new Array(c).fill(null).map((v, k) => k);
  const obj = emptyArray.reduce((acc, next) =>  ({  ...acc, [next]: next }) , {});
  return [ obj, emptyArray.length ];
};

const getRandomString = () => Math.random().toString(36).substring(7);

test('createObject: создать пустой объект', () => {
  expect(createObject()).toEqual({});
});

test('getCountOfProp: кол-во свойств объекта', () => {
  const [ obj, len ] = getRandomObject();
  expect(getCountOfProp(obj)).toEqual(len);
});

test('copyObject: копия объекта', () => {
  const [obj] = getRandomObject();
  const res = copyObject(obj) !== obj;
  expect(res).toBeTruthy();
});

test('mergeObject: слияние объектов', () => {
  const key1 = getRandomString();
  const key2 = getRandomString();
  const obj1 = { [key1]: key1, };
  const obj2 = { [key2]: key2 };
  expect(mergeObject(obj1, obj2)).toEqual({ [key1]: key1, [key2]: key2 });
});

test('hasKey: проверить ключ объекта', () => {
  const key1 = getRandomString();
  const obj1 = { [key1]: key1, };
  expect(hasKey(obj1, key1)).toBeTruthy();
});

test('hasKey: проверить ключ объекта null', () => {
  const key1 = getRandomString();
  const obj1 = { [key1]: null, };
  expect(hasKey(obj1, key1)).toBeTruthy();
});

test('addToObject: Добавить значение в объект', () => {
  const key1 = getRandomString();
  const key2 = getRandomString();
  const obj1 = { [key1]: key1, };
  const nObj = addToObject(obj1, key2, key2);
  expect(nObj).toEqual(obj1);
  expect(nObj).toMatchObject({ [key2]: key2 });
});


/*-------------------------------------НОВЫЕ ЗАДАЧИ--------------------------------------------------*/

for (let i =0; i <6; i++)
{
test('removeKey: Удалить ключ из объекта и вернуть новый', () => {
  const key1 = getRandomString();
  const key2 = getRandomString();
  const obj1 = { [key1]: key1, [key2]: key2 };
  const nObj = removeKey(obj1, key1);
  expect ((obj1[key1] != nObj[key1]) && (obj1[key2] == nObj[key2])).toBeTruthy();
});
}



for (let i =0; i <6; i++){
test('sameKeysObj: Создать и вернуть объект, ключи которого есть в обоих объектах', () =>{

  const key1 = getRandomString();
  const key2 = getRandomString();
  const key3 = getRandomString();
  const key4 = getRandomString();

  const obj1 = {[key1]: key1, [key2]: key2, [key3]: key3, [key4]: key4};
  const obj2 = {[key3]: key3, [key4]: key4 };

  let nObj = sameKeysObj(obj1, obj2);

  let count =0;
  for (let key in nObj)
  {
    count++;
  }

  expect(count>0).toBeTruthy();

});
}



for (let i =0; i <6; i++){
  test('differentKeysObj: Создать и вернуть объект, ключи которого есть только в одном из объектов (разность)', () =>{
  
    const key1 = getRandomString();
    const key2 = getRandomString();
    const key3 = getRandomString();
    const key4 = getRandomString();
    const key5 = getRandomString();
  
    const obj1 = {[key1]: key1, [key2]: key2, [key3]: key3, [key4]: key4,};
    const obj2 = {[key3]: key3, [key4]: key4, [key5]: key5,};
  
    let nObj = differentKeysObj(obj1, obj2);
  
    let count =0;
    
    for (let key in nObj)
    {
      count++;
    }
  
    expect(count>0).toBeTruthy();
  
  });
  
}
