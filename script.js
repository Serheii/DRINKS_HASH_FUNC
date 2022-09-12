"use strict";

function HashStorageFunc() {
  let self = this,
    drinkStorage = {};

  self.addValue = function(key, value) {
      drinkStorage[key] = value;//Добавление перепишет имеющийся поверх, я так понял? Не нашёл об этом информации.
  };
  self.getValue = function(key) {
    return drinkStorage[key];
  };
  self.deleteValue = function(key) {
    if (( key in drinkStorage ) == true ){
    delete drinkStorage[key];//если сработает, вернёт true
    } else {//Думал, что оно и без этого вернёт false
      return false
    }
  };
  self.getKeys = function() {
    let k, storage = [];
    for (k in drinkStorage)
      storage.push(k);
    return storage;//Я так понимаю он сработает после всех итераций перебора?
  };
};
