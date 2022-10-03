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
    let st = [];
    for (let k in self.storage)
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
      recept,
      alk
    }
  drinkStorage.addValue ( key , value );
};

function getDrinkInfo () {
  let key = prompt ('Введите название коктеля');
  let a;
  let b = drinkStorage.getValue(key);
  if ( b == undefined)
    alert('Такого напитка нет');
  else {
      if (b.alk == true) {
      a = 'Алкогольный напиток ';
    } else {
      a = 'Безалкогольный напиток ';
    }
    alert(a+'"'+key+'"'+'\n'+'Рецепт приготовления:\n'+b.recept);
  };
};

function deleteKoktel() {
  let key = prompt ('Введите название коктеля');
  if (drinkStorage.deleteValue ( key ) == true)
    alert('Удалено!');
  else
    alert('Не найдено в базе!');
};

function getName () {
  let c = drinkStorage.getKeys();
   if ( c.length === 0 ) {
     alert('В хранилище нет ни одного напитка');
   } else {
      alert(c);
  };
};