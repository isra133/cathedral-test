<template>
  <router-view/>
</template>

<script>

  import {mapActions} from 'vuex';

  export default{
    name : 'App',
    mounted(){
      this.initApp();
    },
    methods : {
      ...mapActions(['initApp'])
    }
  }
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Press+Start+2P&family=VT323&display=swap');
@import url('https://unpkg.com/nes.css@latest/css/nes.min.css');



@import '@/assets/vars.scss';
@import '@/assets/style.scss';

</style>
