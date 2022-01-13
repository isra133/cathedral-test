<template>
    <div class="question-container nes-container is-rounded" :error="!win" :result="showresult">

        <h1 class="title">Novena pregunta</h1>
        <h2 class="question-title">Haz click en el corazón diferente</h2>


        <div class="hearts-container">
            <img src="/img/hearts.png" alt="hearts" usemap="#hearts">

            <button class="win" @click="validate(true)" :show="showresult"></button>
            <button class="lose" @click="validate(false)"></button>
        </div>


    </div>

</template>


<script>

    import { mapActions } from 'vuex';

    export default {
        name: 'nineth-question',
        data: () => ({
            showresult: false,
            win : true
        }),
        methods: {
            ...mapActions(['setFail', 'setWin']),
            validate(win) {

                this.showresult = true;
                this.win = win;

                setTimeout(() => {
                    if(win){
                        this.setWin(8)
                    }else{
                        this.setFail(8)
                    }
                }, 3000);

            }
        }
    }
</script>


<style lang="scss" scoped>
    .question-container[error="true"]{
        background: rgba(255,0,0,.5);
    }

    .question-container[error="false"][result=true]{
        background: rgba(0,255,0,.5);
    }
</style>