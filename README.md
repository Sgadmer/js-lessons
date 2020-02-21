Список заданий
Команда переключения git checkout -b sum 1-lesson - сразу создаст локальную ветку sum с заданием для1-lesson (-b - создать новую ветку, sum - имя новой ветки, 1-lesson - метка, откуда создать)
Список меток git tag
sum - Функция сложения git checkout -b sum 1-lesson
object - Задачи по объектам git checkout -b object 2-lesson
array - Задачи по массивам git checkout -b array array-lesson
Как получить изменения к себе в проект?
Установить ссылку в вашем проекте на этот git remote add upstream https://github.com/zepster/js-lessons.git

Скачать изменения к себе на компьютер git fetch upstream

Переключить свой проект в ветку мастер git checkout master

Добавить изменения в файлы своего проекта git merge upstream/master

Первый пункт git remote add upstream ... выполняется единожды, остальные каждый раз, по необходимости получить новые изменения

Если ветка с заданием еще не создана

Переключиться на ветку master git checkout master
Создать новую локальную ветку от любого доступного задания git checkout -b имя_новой_ветки метка_задания
Каждое задание запускает свой набор тестов npm test

Переключение между локальными ветка
Посмотреть список локальных веток git branch
Переключиться на локальную существующу ветку git checkout имя_ветки
Вопросы
Для вопросов создать новую тему https://github.com/zepster/js-lessons/issues/new