<template>
    <div class="question-container nes-container is-rounded">
        
        <h1 class="title">Tercera pregunta</h1>

        <h2 class="question-title">Escribe alguna palabra que no tenga relación.</h2>

        <ul class="question-list nes-list is-disc">
            <li :key="key" v-for="(word,key) in words">{{word}}</li>
          </ul>

        <div class="nes-field">
            <label for="question">Escribe aquí</label>
            <input type="text" id="question" class="nes-input" v-model="result" @keyup.enter="validate">
          </div>


        <button class="nes-btn" @click="validate">
            Validar
        </button>
        

    </div>

</template>


<script>

import {mapActions} from 'vuex';

    export default{
        name : 'thrid-question',
        data :() => ({
            goodwords : ["Perro", "Ciervo", "Lagarto", "Canguro"],
            badwords : ["Freno", "Baca"],
            result : ''
        }),
        computed : {
            words(){
                return this.goodwords.concat(this.badwords).sort(()=> Math.random() - 0.5);
            }
        },
        methods : {
            ...mapActions(['setFail', 'setWin']),
            validate(){
                let itsok = this.badwords.some(word => word.toLowerCase() == this.result.toLowerCase());
                (itsok) ? this.setWin(2) : this.setFail(2);
            }
        }
    }
</script>