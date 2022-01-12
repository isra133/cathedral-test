<template>
    <div class="question-container nes-container is-rounded">

        <h1 class="title">Sexta pregunta</h1>

        <h2 class="question-title">Marca los colores</h2>

        <div class="draggable">
    

        </div>

        <button class="nes-btn" @click="validate">
            Validar
        </button>


    </div>

</template>


<script>


    export default {
        name: 'sixth-question',
        mounted() {
            // this.result = this.options.sort(() => Math.random() - 0.5);
        },
        data: () => ({
            options: ["Naranja", "Azul", "Marrón", "Verde"],
            result: []
        }),
        methods: {
            validate() {
                if (this.selected == 3) {
                    this.$emit('nextstep')
                }
            }
        }
    }
</script>