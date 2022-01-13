<template>
    <div class="congrats">
        <div class="lom" :error="gamedata.showfail">
            <img src="https://robohash.org/LOM" alt="LOM">

            <div class="bubble nes-balloon from-left">
                
                <template v-if="gamedata.showcongrats">
                    <h2 class="title" v-html="messages[gamedata.step].congrats.title"></h2>
                    <template v-for="(el, key) in messages[gamedata.step].congrats.body" :key="key">
                        <p v-html="el"></p>
                    </template>
                </template>


                <template v-if="gamedata.showfail">
                    <h2 class="title" v-html="messages[gamedata.step].error.title"></h2>
                    <template v-for="(el, key) in messages[gamedata.step].error.body" :key="key">
                        <p v-html="el"></p>
                    </template>
                </template>



            </div>

            <button class="nes-btn" @click="nextstep">
                Continuar
            </button>

        </div>
    </div>
</template>


<script>

    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'congrats',
        data: () => ({
            messages: {
                "1": {
                    "congrats": {
                        "title": "Enhorabuena",
                        "body": [
                            "Efectivamente Fernando Alonso, ganó sus mundiales con Renault en 2005 y 2006.",
                            "Pulsa <strong>continuar</strong> para seguir jugando."
                        ]
                    },
                    "error" : {
                        "title": "Oh..",
                        "body": [
                            "Fernando Alonso, ganó sus mundiales con Renault en 2005 y 2006. Puedes seguir intentando demostrar tu valía como ser humano",
                            "Pulsa <strong>continuar</strong> para seguir jugando."
                        ]
                    }
                },
                "2": {
                    "congrats": {
                        "title": "¡Has acertado!",
                        "body": [
                            "La raíz cuadrada de 144, es 12.",
                            "Puedes continuar jugando."
                        ]
                    },
                    "error" : {
                        "title": "ERROR!!!",
                        "body": [
                            "Fallaste el cálculo. Creo que no debería dejar a la humanidad con vida. La respuesta es 12.",
                            "Puedes seguir intentando salvar a la humanidad"
                        ]
                    }
                },
                "3": {
                    "congrats": {
                        "title": "Bien visto.",
                        "body": [
                            "Tanto freno como baca son partes de un coche y no animales.",
                            "Solo te quedan 7 preguntas más"
                        ]
                    },
                    "error" : {
                        "title": "NO",
                        "body": [
                            "Solo freno y baca son partes de un coche y no animales.",
                            "Continúa, por favor."
                        ]
                    }
                },
                "4": {
                    "congrats": {
                        "title": "Buen ojo",
                        "body": [
                            "Parece que ya nos conocemos. Sigamos jugando.",
                        ]
                    },
                    "error" : {
                        "title": "Me ofendes",
                        "body": [
                            "Yo pensaba que ya nos conocíamos",
                        ]
                    }
                },
                "5": {
                    "congrats": {
                        "title": "Correcto",
                        "body": [
                            "Ya queda poco. Sigamos con el juego.",
                        ]
                    },
                    "error" : {
                        "title": "Incorrecto",
                        "body": [
                            "Creo que debería aniliquilar a la humanidad ahora mismo...",
                        ]
                    }
                },
                "6": {
                    "congrats": {
                        "title": "Bien",
                        "body": [
                            "Veo que tienes buena memoria. Sigue así y salvarás la humanidad.",
                        ]
                    },
                    "error" : {
                        "title": "oh",
                        "body": [
                            "Fallaste",
                        ]
                    }
                },
                "7": {
                    "congrats": {
                        "title": "Enhorabuena",
                        "body": [
                            "Esta era dificil. Bien jugado.",
                        ]
                    },
                    "error" : {
                        "title": "Lo siento.",
                        "body": [
                            "No la adivinaste.",
                        ]
                    }
                },
                "8": {
                    "congrats": {
                        "title": "Bien calculado",
                        "body": [
                            "El resultado es 215,41",
                        ]
                    },
                    "error" : {
                        "title": "Oh no, calculaste mal",
                        "body": [
                            "El resultado es 215,41",
                        ]
                    }
                }
            }
        }),
        computed: {
            ...mapGetters({
                gamedata: 'gameVars'
            })
        },
        methods: {
            ...mapActions(['nextstep']),
        }
    }
</script>


<style lang="scss" scoped>
    .congrats {
        position: fixed;
        left: 0px;
        bottom: 0px;
        background: rgba(0, 0, 0, .8);
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 100px;

        .nes-btn {
            position: absolute;
            left: 50%;
            bottom: -100px;
            transform: translateX(-50%);
        }

        .lom[error=true]{
            background: url(/img/lom-error-background.jpg) center/cover no-repeat;
        }

    }
</style>