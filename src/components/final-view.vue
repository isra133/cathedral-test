<template>
    <div>

        <div class="lom" :error="gamedata.results.some(e => !!!e)">

            <img src="https://robohash.org/LOM" alt="LOM">
            
            <div class="bubble nes-balloon from-left" v-if="gamedata.results.every(e => e)">
                <h2 class="title">Enhorabuena</h2>
                <p>Tus conocimientos han salvado a la humanidad, en la parte inferior podrás ver tu valor como ser humano.</p>
                <p><strong>FELICIDADES</strong></p>
            </div>

            <div class="bubble nes-balloon from-left" v-if="gamedata.results.some(e => !!!e)">
                <h2 class="title">Una pena...</h2>
                <p>Tus conocimientos no han sido suficientes como para salvar la humanidad</p>
            </div>

        </div>
    </div>
</template>


<script>

    import {mapGetters} from 'vuex';

    export default {
        name: 'final-view',
        computed: {
            ...mapGetters({
                gamedata: 'gameVars'
            })
        },
    }
</script>

<style lang="scss" scoped>
    .question-container {
        margin-top: 20px;
    }
</style>