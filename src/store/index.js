import { createStore } from 'vuex'

export default createStore({
  state: {
    game : {
      step : 6,
      TOTAL : 10
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
    }
  },
  actions: {
    nextstep({commit}){
      commit('nextstep')
    }
  },
  modules: {
  }
})
