<template>
    <div class="question-container nes-container is-rounded">

        <h1 class="title">Octava pregunta</h1>

        <h2 class="question-title">Calcula el lado que falta</h2>

        <div class="triangle-container">
            <div class="triangle"></div>
            <span class="left">80</span>
            <span class="bottom">200</span>
        </div>

        <div class="nes-field">
            <label for="question">Escribe tu resultado aquí</label>
            <input type="text" id="question" class="nes-input" v-model="result" @keyup.enter="validate">
        </div>


        <button :class="['nes-btn',(!result) ? 'is-disabled' : '']" @click="validate">
            Validar
        </button>


    </div>

</template>


<script>

    import { mapActions } from 'vuex';

    export default {
        name: 'second-question',
        data: () => ({
            result: ''
        }),
        methods: {
            ...mapActions(['setFail', 'setWin']),
            validate() {

                let result = Number(this.result.replace(",", "."));


                if (result >= 215.4 && result < 215.5) {
                    this.setWin(7);
                } else {
                    this.setFail(7);
                }
            }
        }
    }
</script>


<style lang="scss" scoped>
    .triangle-container {
        position: relative;
        display: inline-block;
        margin-bottom: 50px;


        .left {
            position: absolute;
            left: -40px;
            top: 50%;
            font-size: 18px;
            transform: translateY(-50%);
            font-family: 'Press Start 2P', cursive;
        }

        .bottom {
            position: absolute;
            left: 50%;
            bottom: -25px;
            font-size: 18px;
            transform: translateX(-50%);
            font-family: 'Press Start 2P', cursive;
        }

    }

    .triangle {
        width: 200px;
        height: 80px;
        background: #4d2473;
        display: inline-block;
        clip-path: polygon(0 0, 0% 100%, 100% 100%);
    }

    @media screen and (max-width:420px) {

        .triangle-container .left{
            left: -35px;
        }

        .triangle-container .left,
        .triangle-container .bottom {
            font-size: 16px;
        }
    }
</style>