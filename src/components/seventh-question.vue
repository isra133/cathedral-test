<template>
    <div class="question-container nes-container is-rounded">

        <h1 class="title">Séptima pregunta</h1>

        <h2 class="question-title">Adivina la palabra</h2>

        <template v-if="!showresult">

            <h3 class="hidden-word">
                <template v-for="(word,key) in selected" :key="key">
                    <span v-if="!positionshidden.some(e => e == key)">
                        {{word}}
                    </span>
                    <span v-else>*</span>
                </template>
            </h3>
            
            <div class="nes-field">
                <label for="question">Escribe la palabra aquí</label>
                <input type="text" id="question" class="nes-input" v-model="result" @keyup.enter="validate">
            </div>
            
        </template>

        <h3 class="hidden-word" v-if="showresult">
            <template v-for="(word,key) in selected" :key="key">
                <span>{{word}}</span>
            </template>
        </h3>


        <button class="nes-btn" @click="validate" v-if="!showresult">
            Validar
        </button>


    </div>

</template>


<script>

    import { mapActions } from 'vuex';

    export default {
        name: 'seventh-question',
        mounted() {
            this.setGame();
        },
        data: () => ({
            options: ['Avestruz', 'Planeta', "Lagarto", "Humanidad", "Programa", "Estrella", "Montaña", "Cielo", "Pantalla"],
            result: '',
            selected: '',
            showresult: false,
            positionshidden: [],
        }),
        methods: {
            ...mapActions(['setFail', 'setWin']),
            setGame() {
                const HIDDENPERCENT = 0.4;
                this.selected = this.options[Math.floor(Math.random() * (this.options.length))];
                let wordshidden = (Math.floor(this.selected.length * HIDDENPERCENT) > 1) ? Math.floor(this.selected.length * HIDDENPERCENT) : 1;
                let complete = false;
                while (!complete) {
                    let pos = Math.floor(Math.random() * (this.selected.length - 0) + 0);
                    if (!this.positionshidden.some(p => p == pos)) {
                        this.positionshidden.push(pos);
                        complete = (this.positionshidden.length == wordshidden);
                    }
                }

            },
            validate() {

                this.showresult = true;

                setTimeout(() => {
                    if (this.result.toLowerCase() == this.selected.toLowerCase()) {
                        this.setWin(6);
                    } else {
                        this.setFail(6);
                    }
                }, 4000);

            }
        }
    }
</script>