<template>
    <div class="death-view row-center" :cinemamode="!gamedata.deathplayed">
        <iframe v-if="!gamedata.deathplayed" src="https://www.youtube.com/embed/hiGelaAeqDk?start=118&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


        <div class="lom" v-else>
            <img src="https://robohash.org/LOM" alt="LOM">

            <div class="bubble nes-balloon from-left">
                <h2 class="title">Lo siento mucho</h2>
                <p>Has fallado y la humanidad no ha merecido vivir</p>
            </div>
        </div>


    </div>
</template>

<script>

    import {mapGetters,mapActions} from 'vuex';

    export default{
        name : 'death-view',
        mounted(){
            setTimeout(() => {
                this.deathplayed();
            },16000)
        },
        computed : {
            ...mapGetters({
                gamedata: 'gameVars'
            })
        },
        methods : {
            ...mapActions(['deathplayed'])
        }
        
    }
</script>


<style lang="scss" scoped>
    .death-view{
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.5);
        overflow: hidden;

        &::before,
        &::after{
            position: absolute;
            left:0;
            top:0;
            width:100%;
            height:150px;
            background:black;
            z-index: 4;
            content:'';
            transition:.6s;
            transition-timing-function: ease-in-out;
            transform:translateY(-200px);
        }

        &::after{
            bottom:0;
            top: auto;
            transform:translateY(200px);
        }


        &[cinemamode="true"]::after,
        &[cinemamode="true"]::before{
            transform:translateY(0px);
        }

        iframe{
            width: 100%;
            max-width: 1200px;
            height: 650px;
            position: relative;
            z-index: 5;
        }
    }
</style>