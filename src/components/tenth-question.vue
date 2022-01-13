<template>
    <div class="question-container nes-container is-rounded" :error="!win" :result="showresult">

        <h1 class="title">Última pregunta</h1>
        <h2 class="question-title">¿Quieres aniquilar a la humanidad?</h2>

        <div class="buttons-container">
            <a @click="annihilate" class="nes-btn is-error">Sí</a>
            <a @click="setWin(9)" class="nes-btn is-success">No</a>
        </div>


    </div>

</template>


<script>

    import { mapActions } from 'vuex';

    export default {
        name: 'tenth-question',
        methods: {
            ...mapActions(['annihilate', 'setWin']),
        }
    }
</script>


<style lang="scss" scoped>
.question-title{
    text-align: center;
}
</style>