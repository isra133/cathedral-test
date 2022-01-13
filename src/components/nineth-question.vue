<template>
    <div class="question-container nes-container is-rounded" @keyup="validate" tabindex="0">

        <h1 class="title">Novena pregunta</h1>
        <h2 class="question-title">Pulsa la tecla en tu teclado</h2>


        
        <button class="nes-btn" @click="validate" v-if="!showresult">
            Validar
        </button>

        

    </div>

</template>


<script>

    import { mapActions } from 'vuex';

    export default {
        name: 'nineth-question',
        mounted(){
   
        },
        data : () => ({

        }),
        methods: {
            ...mapActions(['setFail', 'setWin']),
            setGame(){

            },
            validate(event) {

                console.log(event)

                // if (this.selected == 3) {
                //     this.setWin(0);
                // } else {
                //     this.setFail(0);
                // }
            }
        }
    }
</script>