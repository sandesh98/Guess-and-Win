<template>
    <div class="container">
        <header>
            <h1 class="shadow">Guess and win</h1>
        </header>
        <div class="card h-100 pt-2">

            <!-- <div class="progress">
                <div class="bar" id="progress"></div>
            </div> -->
            <div class="progress" id="blips">
    <div class="progress-bar" role="progressbar">
      <span class="sr-only"></span>
    </div>
  </div>

            <ul class="text-center list-unstyled">
                <li v-for="(word, key) in words" @click="wordClicked(key, $event.target)">
                    {{ word }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {

    mounted() {
        let ctr = 0;
        let max = 5;
        let perc = (100 / max);

        this.timer = setInterval(() => {
            ctr++;
            $('#blips > .progress-bar').attr("style","width:" + (perc * ctr) + "%");
    
            if (ctr==max){
                clearInterval(this.timer);
                this.moveOn();
            }
        }, 1000)
    },

    data: function() {
        return {
            words: ['sandesh', 'nissan', 'londen eye', 'Zwitserland', 'Bitcoin']
        }
    },

    beforeCreate: function() {
        document.body.className = 'words'
    },

    methods: {
        wordClicked(key, word) {
            // this.$router.curTeam.score += Math.max(0, this.$router.curTeam.guessed - gegooid_op_dobbelsteen);
            this.$router.curTeam.guessed++;
            word.classList.add('disabled-word');

            console.log(this.$router.teams)
        },
        moveOn() {
            this.$router.nextTeam();
            this.$router.push('/switch');
        }
    },

}
</script>

<style>
    ul {
        margin: 0;
        padding: 0;
    }

    li {
        font-size: 60px;
        font-weight: bold;
        cursor: pointer;
    }

    .disabled-word {
        pointer-events: none;
        color: #D1D1D1;
        position: relative;
        display: table;
        margin: 0 auto;
        cursor: default;
    }

    .disabled-word:before {
        position: absolute;
        content: "";
        left: 0;
        top: 50%;
        right: 0;
        border-top: 3px solid;
        border-color: inherit;

        -webkit-transform:rotate(-5deg);
        -moz-transform:rotate(-5deg);
        -ms-transform:rotate(-5deg);
        -o-transform:rotate(-5deg);
        transform:rotate(-5deg);
    }
</style>


