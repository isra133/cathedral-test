<template>
  <div class="wrapper column-center">
    <intro @nextstep="nextstep" v-if="gamedata.step == 0"></intro>
    <first-question @nextstep="nextstep" v-if="gamedata.step == 1"></first-question>
    <second-question @nextstep="nextstep" v-if="gamedata.step == 2"></second-question>
    <thrid-question @nextstep="nextstep" v-if="gamedata.step == 3"></thrid-question>
    <fourth-question @nextstep="nextstep" v-if="gamedata.step == 4"></fourth-question>
    <fifth-question @nextstep="nextstep" v-if="gamedata.step == 5"></fifth-question>
    <sixth-question @nextstep="nextstep" v-if="gamedata.step == 6"></sixth-question>


    <div class="stars-container row-around nes-container is-rounded" v-if="gamedata.step != 0">
      <i :class="['nes-icon', 'star', 'is-medium', (gamedata.step <= pos) ? 'is-transparent' : '']" v-for="(pos,key) in gamedata.TOTAL" :key="key"></i>
    </div>


  </div>
</template>

<script>

  import { mapGetters,mapActions } from 'vuex';
  

  import intro from '@/components/intro';
  import firstquestion from '@/components/first-question'
  import secondquestion from '@/components/second-question'
  import thridquestion from '@/components/thrid-question'
  import fourthquestion from '@/components/fourth-question'
  import fifthquestion from '@/components/fifth-question'
  import sixthquestion from '@/components/sixth-question'
  

  export default {
    name: 'Home',
    computed: {
      ...mapGetters({
        gamedata: 'gameVars'
      })
    },
    methods : {
      ...mapActions(['nextstep']),
    },
    components: {
      'intro' : intro,
      'first-question' : firstquestion,
      'second-question' : secondquestion,
      'thrid-question' : thridquestion,
      'fourth-question' : fourthquestion,
      'fifth-question' : fifthquestion,
      'sixth-question' : sixthquestion
    }
  }
</script>