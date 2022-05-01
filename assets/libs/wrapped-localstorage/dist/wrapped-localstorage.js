// Local storage
// __________________________________________________
export const WrappedLocalStorage = {
  // Проверяет наличие элемент в локальном хранилище.
  has: (key) => {
    return localStorage.propertyIsEnumerable(key);
  },
  // Получает значение элемента локального хранилища.
  get: (key) => {
    let result = localStorage.getItem(key);
    
    try {
      result = JSON.parse(result);
    } catch (ex) {
      return result;
    }
    
    return result;
  },
  // Создаёт элемент в локальном хранилище.
  set: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  // Удаляет элемент из локального хранилища.
  delete: (key) => {
    localStorage.removeItem(key);
  },
  // Очищает локальное хранилище.
  deleteAll: () =>{
    localStorage.clear();
  },
  // Получает количество элементов локального хранилища.
  getLength: () => {
    return localStorage.length;
  },
  // Проверка работоспособности локального хранилища
  checkEnabled: () => {
    try {
        return "localStorage" in window && window["localStorage"] !== null;
    } catch (ex) {
        return false;
    }
  }
}