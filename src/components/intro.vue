<template>
    <div class="container">

        <div class="lom-container column-center">

            <div class="lom">
                <img src="https://robohash.org/LOM" alt="LOM">

                <div class="bubble nes-balloon from-left">
                    <h2 class="title">Hola Humano</h2>
                    <p>Soy LOM, soy el líder de las máquinas. Hoy me levante con buen pie y te daré la oportunidad de salvar a la humanidad.</p>
                    <p>Voy a poner a prueba tu valor como humano.</p>
                    <p>Para ello deberás responder correctamente a 10 preguntas, solo si respondes correctamente a todas las preguntas salvarás a la humanidad y si no, la humanidad quedará aniquilada por las máquinas.</p>
                </div>
            </div>


            <button class="nes-btn" @click="nextstep">
                Acepto
            </button>


        </div>

    </div>
</template>


<script>

    import {mapActions} from 'vuex'

    export default{
        name : 'intro',
        methods : {
            ...mapActions(['nextstep'])
        }
    }
</script>