<template>
  <div class="wrapper column-center">

    <template v-if="!gamedata.annihilate">

      <intro @nextstep="nextstep" v-if="gamedata.step == 0"></intro>
      <first-question v-if="gamedata.step == 1"></first-question>
      <second-question v-if="gamedata.step == 2"></second-question>
      <thrid-question v-if="gamedata.step == 3"></thrid-question>
      <fourth-question v-if="gamedata.step == 4"></fourth-question>
      <fifth-question v-if="gamedata.step == 5"></fifth-question>
      <sixth-question v-if="gamedata.step == 6"></sixth-question>
      <seventh-question v-if="gamedata.step == 7"></seventh-question>
      <eighth-question v-if="gamedata.step == 8"></eighth-question>
      <nineth-question v-if="gamedata.step == 9"></nineth-question>
      <tenth-question v-if="gamedata.step == 10"></tenth-question>

      <final-view v-if="gamedata.step == 99"></final-view>

      <div class="stars-container row-around nes-container is-rounded" v-if="gamedata.step != 0">
        <i :class="['nes-icon', 'star', 'is-medium', (pos === null) ? 'is-empty' : '', (pos === false) ? 'is-transparent' : '']"
          v-for="(pos,key) in gamedata.results" :key="key"></i>
      </div>


      <button  v-if="gamedata.results.every(e => e)" @click="resetgame" class="nes-btn reset-game">Reiniciar</button>


    </template>

    <death-view v-else></death-view>

    <show-result v-if="gamedata.showcongrats || gamedata.showfail"></show-result>
    


    <!-- CORRIGE LO DE LA MUERTE -->


  </div>
</template>

<script>

  import { mapGetters,mapActions} from 'vuex';


  import intro from '@/components/intro';
  import firstquestion from '@/components/first-question'
  import secondquestion from '@/components/second-question'
  import thridquestion from '@/components/thrid-question'
  import fourthquestion from '@/components/fourth-question'
  import fifthquestion from '@/components/fifth-question'
  import sixthquestion from '@/components/sixth-question'
  import seventhquestion from '@/components/seventh-question'
  import eighthquestion from '@/components/eighth-question'
  import ninethquestion from '@/components/nineth-question'
  import tenthquestion from '@/components/tenth-question'


  import deathview from '@/components/death-view';
  import showresult from '@/components/show-result';
  import finalview from '@/components/final-view';
  

  export default {
    name: 'Home',
    computed: {
      ...mapGetters({
        gamedata: 'gameVars'
      })
    },
    methods : {
      ...mapActions(['resetgame']),
    },
    components: {
      'intro': intro,
      'first-question': firstquestion,
      'second-question': secondquestion,
      'thrid-question': thridquestion,
      'fourth-question': fourthquestion,
      'fifth-question': fifthquestion,
      'sixth-question': sixthquestion,
      'seventh-question': seventhquestion,
      'eighth-question': eighthquestion,
      'nineth-question': ninethquestion,
      'tenth-question': tenthquestion,
      'death-view': deathview,
      'show-result' : showresult,
      'final-view' : finalview,      
    }
  }
</script>