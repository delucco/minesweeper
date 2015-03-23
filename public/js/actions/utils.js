var Actions = require('./completedActions');

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


var minefield = {

  size: sizes['meduim'],

  difficulty: level['medium'],

  rows: [],

  countBombs: function(i,j) {
    if (i<0 || i>this.size-1 || j<0 || j>this.size-1) {
      return 0;
    } else {
      return this.rows[i][j].bombs;  
    } 
  },

  calculateThreat: function() {
    for (var i=0; i<this.size; i++) {
      for (var j=0; j<this.size; j++) {
        this.rows[i][j].threat = this.countBombs(i-1,j) + this.countBombs(i-1,j+1) + this.countBombs(i-1,j-1) + this.countBombs(i,j+1) + this.countBombs(i,j-1) + this.countBombs(i+1,j-1) + this.countBombs(i+1,j) + this.countBombs(i+1,j+1); 
      }
    }
  },

  resize: function(size, difficulty, callback) {
    this.size = sizes[size] || this.size;
    this.rows = [];
    for (var i=0; i<this.size; i++) {
      this.rows.push([])
      for (var j=0; j<this.size; j++) {
        this.rows[i].push({bombs: 0, revealed: false, threat: 0});
      }
    }
    this.resow(difficulty, callback);
  },

  resow: function(difficulty, callback) {
    var multiplier = level[difficulty] || this.difficulty;
    var count = 0;
    while (count < this.size * multiplier) {
      var randomRowIndex = Math.floor(Math.random() * this.size);
      var randomColIndex = Math.floor(Math.random() * this.size);
      this.rows[randomRowIndex][randomColIndex].bombs = 1;
      count++;
    }
    this.calculateThreat();
    callback(this.rows);
  },

  checkForMeadows: function(row, col, callback) {
    if (row<0 || row>this.size-1 || col<0 || col>this.size-1 || this.rows[row][col].revealed === true) {
      callback(this.rows);
    } else if (this.rows[row][col].bombs === 1) {
      for (var i=0; i<this.size; i++) {
        for (var j=0; j<this.size; j++) {
          this.rows[i][j].revealed = true;
        }
      }
      callback(this.rows);
    } else if (this.rows[row][col].threat > 0) {
      this.rows[row][col].revealed = true;
      callback(this.rows);
    } else {
      this.rows[row][col].revealed = true;
      this.checkForMeadows(row-1, col-1, callback);
      this.checkForMeadows(row-1, col, callback);
      this.checkForMeadows(row-1, col+1, callback);
      this.checkForMeadows(row, col-1, callback);
      this.checkForMeadows(row, col+1, callback);
      this.checkForMeadows(row+1, col-1, callback);
      this.checkForMeadows(row+1, col, callback);
      this.checkForMeadows(row+1, col+1, callback);
    }
  }

};

var utils = {

  checkMines: function (row, col) {
    minefield.checkForMeadows(row, col, function(meadows){
      Actions.revealSafety(meadows);
    });
  },

  reset: function (size, difficulty) {
    minefield.resize(size, difficulty, function(data){
      Actions.resetField(data);
    })
  }

}

module.exports = utils;
