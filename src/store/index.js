import { createStore } from 'vuex'

export default createStore({
  state: {
    game : {
      step : 10,
      TOTAL : 10,
      results : [null,null,null,null,null,null,null,null,null,null],
      showcongrats : false,
      showfail : false,
      deathplayed : false,
      annihilate : false
    }
  },
  getters :  {
    gameVars: state => {
      return state.game
    }
  },
  mutations: {
    nextstep(state){
      state.game.step++;
      state.game.showcongrats = false;
      state.game.showfail = false;
    },
    setFail(state, question){
      state.game.results[question] = false;
      state.game.showfail = true;
    },
    setWin(state, question){
      state.game.results[question] = true;
      if(question != 9){
        state.game.showcongrats = true;
      }else{
        state.game.step = 99;
      }
    },
    deathplayed(state){
      state.game.deathplayed = true
    },
    annihilate(state){
      state.game.annihilate = true;
    }
  },
  actions: {
    nextstep({commit}){
      commit('nextstep')
    },
    setFail({commit},question){
      commit('setFail',question)
    },
    setWin({commit},question){
      commit('setWin',question)
    },
    deathplayed({commit}){
      commit('deathplayed');
    },
    annihilate({commit}){
      commit('annihilate')
    }        
  },

})
