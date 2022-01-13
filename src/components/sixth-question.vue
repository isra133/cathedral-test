<template>
    <div class="question-container nes-container is-rounded">

        <h1 class="title">Sexta pregunta</h1>

        
        <div class="card-container row-start" v-if="shownumbers">
            <h2 class="question-title">Memoriza los números</h2>
            <template v-for="(num,key) in values" :key="key">
                <div class="card">{{num}}</div>
            </template>
        </div>

        <div class="nes-field" v-if="!shownumbers">
            <label for="question">Introduce un número de los anteriores</label>
            <input type="text" id="question" class="nes-input" v-model="result">
        </div>

        <button class="nes-btn" @click="validate" v-if="!shownumbers">
            Validar
        </button>


    </div>

</template>


<script>

import {mapActions} from 'vuex';

    export default {
        name: 'sixth-question',
        mounted(){
            setTimeout(() => {
                this.shownumbers = false;
            },3000)
        },
        data: () => ({
            values: ["1", "3", "7", "9", "12","18","24","35","40"],
            result: '',
            shownumbers : true
        }),
        methods: {
            ...mapActions(['setFail', 'setWin']),
            validate() {
                if(this.values.some(e => e == this.result)){
                    this.setWin(5);
                }else{
                    this.setFail(5);
                }
            }
        }
    }
</script>