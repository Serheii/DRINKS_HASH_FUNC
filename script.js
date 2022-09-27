"use strict";

function HashStorageFunc() {
  let self = this;
      self.storage = {};

  self.addValue = function(key, value) {
      self.storage[key] = value;
  };
  self.getValue = function(key) {
    let ret;
    if (key in self.storage) {
    ret = key;
      for ( let i in self.storage[key] )
      ret = ret + '/' + self.storage[i];
    }
    return ret;
  };
  self.deleteValue = function(key) {
    if (( key in self.storage ) == true ){
    delete self.storage[key];
    return true;
    } else {
      return false
    }
  };
  self.getKeys = function() {
    let k, st = [];
    for (k in self.storage)
      st.push(k);
    return st;
  };
};
let drinkStorage = new HashStorageFunc();

function drinkInfo() {
  let name = prompt ('Введите название коктеля');
  let recept = prompt ('Введите рецепт');
  let alk = confirm ('Коктель алкогольный?');
  let info = {
    name : {
      recept,
      alk
    }
  };
  drinkStorage.addValue ( name , info );
};

function getDrinkInfo () {
  let name = prompt ('Введите название коктеля');
  let n = drinkStorage.getValue ( name );
  alert(n);
};

function deleteKoktel() {
  let name = prompt ('Введите название коктеля');
  drinkStorage.deleteValue ( name );
};

function getName () {
  alert(drinkStorage.getKeys());
};