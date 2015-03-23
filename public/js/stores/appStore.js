var AppDispatcher = require('../dispatchers/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
// var Constants = require('../constants/constants')


var CHANGE_EVENT = 'change';

var sizes = {
  small: 10,
  medium: 20,
  large: 40
};

var level = {
  easy: 1,
  medium: 2,
  hard: 3
};

var _state = {
  settings: {
    size: 'medium',
    difficulty: 'medium'
  },
  minefield: [
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0],
    [0,0,0,0,0]
  ]
};

var minefield = {

  size: sizes[_state.settings.size],

  rows: [],

  resize: function(size) {
    this.size = sizes[size];
    this.rows = [];
    for (var i=0; i<this.size; i++) {
      this.rows.push([])
      for (var j=0; j<rows; j++) {
        this.rows[i].push({bombs: 0});
      }
    }
    this.resow();
  },

  resow: function(difficulty) {
    var multiplier = level[difficulty] || level[_state.settings.difficulty];
    var count = 0;
    var randomIndex = Math.floor(Math.random * this.size);
    while (count < this.size * multiplier) {
      this.rows[randomIndex][randomIndex][bombs] = 1;
      count++;
    }
    _state[minefield] = this.rows;
  }

};


var AppStore = assign({}, EventEmitter.prototype, {

  getState: function(){
    minefield.resize();
    return _state;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback){
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListerner: function(callback){
    this.removeListener(CHANGE_EVENT, callback);
  }

});

AppDispatcher.register(function(action) {
  switch(action.action.actionType) {
    case Constants.SELECTED_LIBRARY:
      text = action.action.text.trim();
      changeLibrary(text);
      AppStore.emitChange();
      break;

    case Constants.SELECTED_METHOD:
      text = action.action.text.trim();
      changeMethod(text);
      AppStore.emitChange();
      break;

    case Constants.SIGN_IN:
      AppStore.storeAuthData(action.action.data);
      AppStore.emitChange();
      break;
  }
});

module.exports = AppStore;