<template>
    <div class="question-container nes-container is-rounded">
        
        <h1 class="title">Tercera pregunta</h1>

        <h2 class="question-title">Escribe la palabra que sobra</h2>

        <ul class="question-list nes-list is-disc">
            <li :key="key" v-for="(word,key) in words">{{word}}</li>
            
          </ul>

        <div class="nes-field">
            <label for="question">Escribe aquí</label>
            <input type="text" id="question" class="nes-input" v-model="result">
          </div>


        <button class="nes-btn" @click="validate">
            Validar
        </button>
        

    </div>

</template>


<script>
    export default{
        name : 'thrid-question',
        data :() => ({
            goodwords : ["Perro", "Gato", "Pajaro", "Canguro"],
            badwords : ["Coche", "Baca"],
            result : ''
        }),
        computed : {
            words(){
                return this.goodwords.concat(this.badwords).sort(()=> Math.random() - 0.5);
            }
        },
        methods : {
            validate(){
                let itsok = this.badwords.some(word => word.toLowerCase() == this.result.toLowerCase());

                if(itsok){
                    this.$emit('nextstep');
                }

            }
        }
    }
</script>