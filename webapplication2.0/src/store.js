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
    dieSelected: [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
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
    ]
  },
  mutations: {
    AddLetter(state, letter) {
      state.word += letter;
      console.log(state.word);
    },
    RemoveLetter(state, letter) {
      state.word = state.word.replace(letter, "");
      console.log(state.word);
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
      const Http = new XMLHttpRequest();
      Http.open('GET', "http://192.168.178.20:3000/"/* + state.word */, true);
      Http.send();
      Http.onreadystatechange=function(){
        if(this.readyState==4 && this.status==200){
          var response = JSON.parse(Http.responseText);
          if(response.isWord){
            state.score += length;
          }
        }
      }
      state.lastSelected = -1;
      state.word = "";
      state.dieSelected = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
    },
    ResetWord(state) {
      state.lastSelected = -1;
      state.word = "";
    },
    ChangeLastSelected(state, dieNumber) {
      state.lastSelected = dieNumber;
    },
    DieSelectedTrue(state, dieNumber) {
      state.dieSelected[dieNumber] = true;
    },
    DieSelectedFalse(state, dieNumber) {
      state.dieSelected[dieNumber] = false;
    },
    ChangeDieSelected(state, dieNumber) {
      state.dieSelected[dieNumber] = !state.dieSelected[dieNumber];
      console.log(state.dieSelected);
    }
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
    getDieSelected: state => {
      return state.dieSelected;
    },
    IsSelected: state => (dieNumber) => {
      return state.dieSelected[dieNumber]
    }
  }
})