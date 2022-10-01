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
  let key = prompt ('Введите название коктеля');
  let recept = prompt ('Введите рецепт');
  let alk = confirm ('Коктель алкогольный?');
  let value = {
    key : {
      recept,
      alk
    }
  };
  drinkStorage.addValue ( key , value );
};

function getDrinkInfo () {
  let key = prompt ('Введите название коктеля');
  let n = drinkStorage.getValue ( key );
  let a;
  if ( n == undefined)
    alert('Такого напитка нет');
  else {
      if (n.key.alk == true) {
      a = 'Алкогольный напиток ';
    } else {
      a = 'Безалкогольный напиток ';
    }
    alert(a+'"'+key+'"'+'\n'+'Рецепт приготовления:\n'+n.key.recept);
  };
};

function deleteKoktel() {
  let key = prompt ('Введите название коктеля');
  let del = drinkStorage.deleteValue ( key );
  if (del==true)
    alert('Удалено!');
  else
    alert('Не найдено в базе!');
};

function getName () {
  let a = drinkStorage.getKeys;
    if ( a()[0] == undefined ) {
      alert('В хранилище нет ни одного напитка');
    } else {
       alert(a());
   }
};