import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    score: 0,
    createDieNumber: 0,
    word: "",
    savedWords: [],
    lastSelected: -1,
    selectedDice: [],
    adjacencyList: [
      [1, 4, 5],
      [0, 2, 4, 5, 6],
      [1, 3, 5, 6, 7],
      [2, 6, 7],
      [0, 1, 5, 8, 9],
      [0, 1, 2, 4, 6, 8, 9, 10],
      [1, 2, 3, 5, 7, 9, 10, 11],
      [2, 3, 6, 10, 11],
      [4, 5, 9, 12, 13],
      [4, 5, 6, 8, 10, 12, 13, 14],
      [5, 6, 7, 9, 11, 13, 14, 15],
      [6, 7, 10, 14, 15],
      [8, 9, 13],
      [8, 9, 10, 12, 14],
      [9, 10, 11, 13, 15],
      [10, 11, 14]
    ],
    letterDistributionLittle: [
      ["A", "A", "E", "E", "G", "N"],
      ["E", "L", "R", "T", "T", "R"],
      ["A", "O", "O", "T", "T", "W"],
      ["A", "B", "B", "J", "O", "O"],
      ["E", "H", "R", "T", "V", "N"],
      ["C", "I", "M", "O", "T", "U"],
      ["D", "I", "S", "T", "T", "R"],
      ["E", "I", "O", "S", "S", "T"],
      ["D", "E", "L", "R", "N", "Y"],
      ["A", "L", "N", "O", "P", "S"],
      ["H", "I", "M", "N", "Q", "U"],
      ["E", "E", "I", "N", "S", "U"],
      ["E", "E", "G", "N", "N", "W"],
      ["A", "F", "F", "K", "P", "S"],
      ["H", "L", "N", "N", "R", "Z"],
      ["D", "E", "I", "L", "R", "X"]
    ],
    wordScores: [0, 0, 0, 1, 1, 2, 3, 4, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
    gameTime: 180000,
  },
  mutations: {
    AddLetter(state, letter) {
      state.word += letter;
    },
    AddSelectedDie(state, dieNumber) {
      state.selectedDice.push(dieNumber);
    },
    RemoveLetter(state) {
      state.word = state.word.slice(0, -1);
      state.selectedDice.pop();
      if (state.selectedDice.length > 0) {
        state.lastSelected = state.selectedDice[state.selectedDice.length - 1];
      }
      else {
        state.lastSelected = -1;
      }
    },
    CreateDie(state) {
      state.createDieNumber++;
    },
    ResetBoard(state) {
      state.createDieNumber = 0;
      state.lastSelected = -1;
    },
    SubmitWord(state) {
      let length = state.word.length;
      let word = state.word.toLowerCase();
      const Http = new XMLHttpRequest();
      Http.open('GET', "http://192.168.137.1:3000/" + word, true);
      Http.send();
      Http.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          let response = JSON.parse(Http.responseText);
          let inList = false;
          for (let i = 0; i < state.savedWords.length; i++) {
            if (state.savedWords[i].word == word) {
              inList = true;
            }
          }
          if (response.isWord && !inList) {
            state.score += state.wordScores[length];
          }
          if(!inList && length > 3){
            state.savedWords.unshift({ word: word, correct: response.isWord });
          }
        }
      }
      state.lastSelected = -1;
      state.word = "";
      state.selectedDice = [];
    },
    ResetWord(state) {
      state.lastSelected = -1;
      state.word = "";
    },
    ChangeLastSelected(state, dieNumber) {
      state.lastSelected = dieNumber;
    },
  },
  actions: {

  },
  getters: {
    getWord: state => {
      return state.word;
    },
    getCreateDieNumber: state => {
      return state.createDieNumber;
    },
    getAdjacencyList: state => {
      return state.adjacencyList;
    },
    getLastSelected: state => {
      return state.lastSelected;
    },
    getScore: state => {
      return state.score;
    },
    IsSelected: state => (dieNumber) => {
      return state.selectedDice.includes(dieNumber);
    },
    IsLastSelected: state => (dieNumber) => {
      return state.selectedDice[state.selectedDice.length - 1] == dieNumber;
    },
    getSavedWords: state => {
      return state.savedWords;
    },
    getLetterDistributionLittle: state => {
      return state.letterDistributionLittle;
    },
    getGameTime: state => {
      return state.gameTime;
    },
  }
})