var AppDispatcher = require('../dispatchers/appDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

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

var changeSize = function(size) {
  _state.settings.size = size;
};

var changeLevel = function(difficulty) {
  _state.settings.difficulty = difficulty;
};

var sowField = function(field) {
  _state.minefield = field;
};

var AppStore = assign({}, EventEmitter.prototype, {

  getState: function(){
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
    case 'NEW_SETTINGS':
      if (action.action.size) {
        changeSize(action.action.size)
      }
      if (action.action.level) {
        changeLevel(action.action.level)
      }
      AppStore.emitChange();
      break;

    case 'FIELD_RESET':
      sowField(action.action.data);
      AppStore.emitChange();
      break;

    case 'SAFETY_UNCOVERED':
      sowField(action.action.data);
      AppStore.emitChange();
      break;
  }
});

module.exports = AppStore;