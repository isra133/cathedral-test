import { createStore } from 'vuex'

export default createStore({
  state: {
    game : {
      step : 0,
      TOTAL : 10,
      results : [null,null,null,null,null,null,null,null,null,null],
      showcongrats : false,
      showfail : false,
      deathplayed : false
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
      state.game.showcongrats = true;
    },
    deathplayed(state){
      state.game.deathplayed = true
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
    }        
  },

})
