<template>
    <div class="question-container nes-container is-rounded">

        <h1 class="title">Cuarta pregunta</h1>

        <h2 class="question-title">¿Quién es el líder de las máquinas?</h2>

        <div class="img-options row-center">

            <div class="nes-container is-rounded" v-for="(option,key) in options" :key="key">
                <img :src="`https://robohash.org/${option}`" :alt="option" @click="set(key)">
            </div>

        </div>

    </div>

</template>


<script>

import {mapActions} from 'vuex';

    export default {
        name: 'fourth-question',
        data: () => ({
            options: {
                1: "Nexus6",
                2: "LOM",
                3: "R2D2",
                4: "HAL9000"
            },
            selected: ''
        }),
        methods: {
            ...mapActions(['setFail', 'setWin']),
            set(value){
                this.selected = value;
                this.validate();
            },
            validate() {
                if (this.selected == 2){
                    this.setWin(3);
                }else{
                    this.setFail(3);
                }
            }
        }
    }
</script>