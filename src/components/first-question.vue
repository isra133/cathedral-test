<template>
    <div class="question-container nes-container is-rounded">

        <h1 class="title">Primera pregunta</h1>



        <h2 class="question-title">¿En cuál escudería ganó Fernando Alonso los dos mundiales?</h2>

        <div class="nes-select">
            <select required id="default_select" v-model="selected">
                <option value="" disabled selected hidden>Selecciona una opción</option>
                <option :value="key" :key="key" v-for="(option,key) in options">{{option}}</option>
            </select>
        </div>



        <button class="nes-btn" @click="validate">
            Validar
        </button>


    </div>

</template>


<script>

    import { mapActions } from 'vuex';

    export default {
        name: 'first-question',
        data: () => ({
            options: {
                1: "Ferrari",
                2: "Mercedes",
                3: "Renault",
                4: "Minardi"
            },
            selected: '',
        }),
        methods: {
            ...mapActions(['setFail', 'setWin']),
            validate() {
                if (this.selected == 3) {
                    this.setWin(0);
                } else {
                    this.setFail(0);
                }
            }
        }
    }
</script>