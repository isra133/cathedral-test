<template>
    <div class="question-container nes-container is-rounded">

        <h1 class="title">Quinta pregunta</h1>

        <h2 class="question-title">¿Se le conoce a Michael Jackson como el rey del pop?</h2>

        <div class="radio-container row-start">
            <label>
                <input type="radio" class="nes-radio" name="question" :value="true" v-model="result"/>
                <span>Si</span>
            </label>

            <label>
                <input type="radio" class="nes-radio" name="question" :value="false" v-model="result"/>
                <span>No</span>
            </label>

        </div>

        <button :class="['nes-btn',(result === null) ? 'is-disabled' : '']" @click="validate">
            Validar
        </button>


    </div>

</template>


<script>

import {mapActions} from 'vuex';

    export default {
        name: 'fifth-question',
        data: () => ({
            result: null
        }),
        methods: {
            ...mapActions(['setFail', 'setWin']),
            validate() {
                if (this.result) {
                    this.setWin(4);
                }else{
                    this.setFail(4);
                }
            }
        }
    }
</script>