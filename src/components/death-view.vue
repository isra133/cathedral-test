<template>
    <div class="death-view row-center" :cinemamode="!gamedata.deathplayed">

        <video id="video" autoplay controls>
            <source src="/img/video.mp4">
        </video>


        <div class="lom">
            <img src="https://robohash.org/LOM" alt="LOM">

            <div class="bubble nes-balloon from-left">
                <h2 class="title">Tú lo has decidido...</h2>
                <p>Te has rendido y has decidido acabar con ellos</p>
            </div>
        </div>


    </div>
</template>

<script>

    import { mapGetters, mapActions } from 'vuex';

    export default {
        name: 'death-view',
        mounted() {

            const video = document.querySelector('video');
            video.onended = () => {
                this.deathplayed();
            };

        },
        computed: {
            ...mapGetters({
                gamedata: 'gameVars'
            })
        },
        methods: {
            ...mapActions(['deathplayed'])
        }

    }
</script>


<style lang="scss" scoped>
    .death-view {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, .5);
        overflow: hidden;

        &::before,
        &::after {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 150px;
            background: black;
            z-index: 4;
            content: '';
            transition: .6s;
            transition-delay:1s;
            transition-timing-function: ease-in-out;
            transform: translateY(-200px);
        }

        &::after {
            bottom: 0;
            top: auto;
            transform: translateY(200px);
        }


        &[cinemamode="true"]::after,
        &[cinemamode="true"]::before {
            transform: translateY(0px);
        }

        .lom{
            transform: translateY(1000px);
            transition: .8s;
            transition-delay: 1.4s;
            transition-timing-function: ease-in-out;
        }

        video {
            width: 100%;
            max-width: 1200px;
            height: 650px;
            z-index: 5;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%,-50%);
            transition:.8s;
            transition-timing-function: ease-in-out;
        }

        &[cinemamode="false"]{
            video{
                transform: translate(-50%,-300%);
            }

            .lom{
                transform: translate(0);
            }
        }

        
    }
</style>