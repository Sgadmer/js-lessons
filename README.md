## Список заданий
 - Команда переключения ```git checkout -b sum 1-lesson``` - сразу создаст локальную ветку ```sum``` с заданием для```1-lesson``` (```-b``` - создать новую ветку, ```sum``` - имя новой ветки, ```1-lesson``` - метка, откуда создать)
 - Список меток ```git tag```
1. [sum](https://github.com/zepster/js-lessons/blob/1-lesson/src/sum/index.js) - Функция сложения ```git checkout -b sum 1-lesson```
2. [object](https://github.com/zepster/js-lessons/blob/2-lesson/src/object/index.js) - Задачи по объектам ```git checkout -b object 2-lesson```
3. [array](https://github.com/zepster/js-lessons/blob/array-lesson/src/array/index.js) - Задачи по массивам ```git checkout -b array array-lesson```
3. [toto-list](https://github.com/zepster/js-lessons/blob/todolist-lesson/src/todoList) - Список задач ```git checkout -b todo-list todolist-lesson```

### Как получить изменения к себе в проект?

1. Установить ссылку в вашем проекте на этот
  ``` git remote add upstream https://github.com/zepster/js-lessons.git```

2. Скачать изменения к себе на компьютер
  ```git fetch upstream```
  
3. Переключить свой проект в ветку мастер
  ```git checkout master```
  
4.  Добавить изменения в файлы своего проекта
    ```git merge upstream/master```
    
 **Первый пункт ```git remote add upstream ... ``` выполняется единожды, остальные каждый раз, по необходимости получить новые изменения**
    

__Если ветка с заданием еще не создана__
 1. Переключиться на ветку master ```git checkout master```
 2. Создать новую локальную ветку от любого доступного задания ```git checkout -b имя_новой_ветки метка_задания```

Каждое задание запускает свой набор тестов ```npm test```


### Переключение между локальными ветка
 - Посмотреть список локальных веток ```git branch```
 - Переключиться на локальную __существующу__ ветку ```git checkout имя_ветки```


### Вопросы
Для вопросов создать новую тему https://github.com/zepster/js-lessons/issues/new 
