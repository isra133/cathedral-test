<template>
    <div class="question-container nes-container is-rounded">
        
        <h1 class="title">Segunda pregunta</h1>

        <h2 class="question-title">Resultado de la raíz cuadrada de 144</h2>

        <div class="nes-field">
            <label for="question">Escribe tu resultado aquí</label>
            <input type="text" id="question" class="nes-input" v-model="result">
          </div>


        <button class="nes-btn" @click="validate">
            Validar
        </button>
        

    </div>

</template>


<script>
    export default{
        name : 'second-question',
        data :() => ({
            result : ''
        }),
        methods : {
            validate(){
                if(this.result == "12"){
                    this.$emit('nextstep')
                }
            }
        }
    }
</script>