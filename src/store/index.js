import { createStore } from 'vuex'

export default createStore({
  state: {
    game : {
      step : 0,
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
    initApp(state){
      if(window.sessionStorage.getItem('data')){
        state.game = JSON.parse(window.sessionStorage.getItem('data'));
      }
    },
    nextstep(state){
      state.game.step++;
      state.game.showcongrats = false;
      state.game.showfail = false;
      window.sessionStorage.setItem('data', JSON.stringify(state.game));
    },
    setFail(state, question){
      state.game.results[question] = false;
      state.game.showfail = true;
      window.sessionStorage.setItem('data', JSON.stringify(state.game));
    },
    setWin(state, question){
      state.game.results[question] = true;
      if(question != 9){
        state.game.showcongrats = true;
      }else{
        state.game.step = 99;
      }
      window.sessionStorage.setItem('data', JSON.stringify(state.game));
    },
    deathplayed(state){
      state.game.deathplayed = true;
      window.sessionStorage.setItem('data', JSON.stringify(state.game));
    },
    annihilate(state){
      state.game.annihilate = true;
      window.sessionStorage.setItem('data', JSON.stringify(state.game));
    },
    resetgame(state){
      state.game = {
        step : 0,
        TOTAL : 10,
        results : [null,null,null,null,null,null,null,null,null,null],
        showcongrats : false,
        showfail : false,
        deathplayed : false,
        annihilate : false
      }
      window.sessionStorage.setItem('data', JSON.stringify(state.game));
    }
  },
  actions: {
    initApp({commit}){
      commit('initApp');
    },
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
    }, 
    resetgame({commit}){
      commit('resetgame')
    }       
  },

})
