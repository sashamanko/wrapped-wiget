# Библиотека для работы с local storage
***
## Установка

npm:

```bash
$ npm install wrapped-localstorage
```

CDN:

```html
<script src="https://cdn.jsdelivr.net/npm/wrapped-localstorage@1.0.0/dist/wrapped-localstorage.min.js"></script>
```
***
## Список функций

#### Проверка наличия элемента в локальном хранилище.
```javascript
    WrappedLocalStorage.has();
```
* Возвращает - Boolean.

#### Получение значение элемента локального хранилища.
```javascript
    WrappedLocalStorage.get();
```
* Возвращает - Object.

#### Создание элемента в локальном хранилище.
```javascript
    WrappedLocalStorage.set();
```
* Принимает аргументы - key, value.

#### Удаление элемент из локального хранилища.
```javascript
    WrappedLocalStorage.delete();
```
* Принимает аргумент - key.

#### Очищение локального хранилища.
```javascript
    WrappedLocalStorage.deleteAll();
```

#### Получение количества элементов локального хранилища.
```javascript
    WrappedLocalStorage.getLength();
```
* Возвращает - Nuber

#### Проверка работоспособности локального хранилища.
```javascript
    WrappedLocalStorage.checkEnabled();
```
* Возвращает - Boolean.