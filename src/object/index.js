/**
  Создать и вернуть пустой объект
 */
function createObject() {

  let sum = {};
  return sum;

}

/**
 * Вернуть кол-во свойств объекта
 *
 * Пример
 * const obj = {
 *   name: 'Name',
 *   age: 11,
 * }
 *
 * getCountOfProp(a) = 2
 *
 * @param object
 */
function getCountOfProp(object) {
  let i=0;
  for (let key in object)
  {
    i++;
  }
  return i;

}

/**
 * Вернуть копию объекта
 * @param obj
 */
function copyObject(obj) {
  let clone = Object.assign({}, obj);
  
  return clone;
}

/**
 * Вернуть новый объект, включающий значения обоих
 * const a = { name: 'Max', };
 * const b = { age: 18, };
 * Пример
 * mergeObject(a, b) = { name: 'Max', age: 18, }
 */
function mergeObject(objectA, objectB) {
  let merge_A_B = Object.assign ({},objectA, objectB);

  return merge_A_B;
}

/**
 * Проверить наличие ключа
 * const a = { name: '1' }
 * hasKey(a, 'name') = true
 */
function hasKey(object, key) {
  return (key in object);

}

/**
 * Добавить значение в объект
 * вернуть то же объект
 * Примет
 * const a = { name: '1' };
 * const key = 'age';
 * const value = '18';
 * addToObject(a, key, value) = { name: '1', age: 18 }
 */
function addToObject(object, key, value) {
  
  object[key] = value;

  return object;

}
/*-------------------------------------НОВЫЕ ЗАДАЧИ--------------------------------------------------
 
* Удалить ключ из объекта и вернуть новый
obj1 !== obj2
let obj1 = { name: 'Max' , age: 22 };  
let obj2 = removeKey(obj1, 'name'); 
// obj2 ->  { age: 22 }
 */

 function removeKey (object1, name) {
  let merge_A_B = Object.assign ({},object1);
  delete merge_A_B[name];
  return merge_A_B;
 }

 /*Создать и вернуть объект, ключи которого есть в обоих объектах
 Придумай название функции
 let obj1 = {
   firstName: 'Max',
   lastName: 'Xam',
   age: 22,
 };
 
 let obj2 = {
   age: 22,
   city: 'NY',
 };
 
 let obj3 = функция(obj1, obj2);
 // obj3 -> {  age: 22  }
*/


function sameKeysObj (obj1, obj2){
  let key;
  let obj3 ={};

  for (let key in obj1)
  {
    if ((key in obj2) == true) {obj3[key] = obj1[key];}
  }

  return obj3; 
} 



// Создать и вернуть объект, ключи которого есть только в одном из объектов (разность)

function differentKeysObj (obj1, obj2){
  let key;
  let obj3 ={};


  for (let key in obj1)
  {
    if ((key in obj2) == false) {obj3[key] = obj1[key];}
  }

  for (let key in obj2)
  {
    if ((key in obj1) == false) {obj3[key] = obj2[key];}
  }

  return obj3;
}



module.exports = {
  createObject,
  getCountOfProp,
  copyObject,
  mergeObject,
  hasKey,
  addToObject,
  removeKey,
  sameKeysObj,
  differentKeysObj,
};
