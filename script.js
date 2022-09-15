"use strict";

function HashStorageFunc() {
  let self = this;
      self.storage = {};

  self.addValue = function(key, value) {
      self.storage[key] = value;
  };
  self.getValue = function(key) {
    return self.storage[key];
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
    name : {recept : alk}//Надеюсь, одинаковых лецептов быть не должно?
  };
  drinkStorage.addValue ( name , info );
};
function getDrinkInfo ( name ) {
  drinkStorage.getValue ( name );
};
function deleteKoktel( name ) {
  drinkStorage.deleteValue ( name );
};
function getName () {
  alert(drinkStorage.getKeys());
};